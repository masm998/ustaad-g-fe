import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { config } from 'src/environments/environment'
import { io } from 'socket.io-client'
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-ongoing-appointment',
  templateUrl: './ongoing-appointment.page.html',
  styleUrls: ['./ongoing-appointment.page.scss'],
})
export class OngoingAppointmentPage implements OnInit {
  socket = io('ws://localhost:3000')
  app_id: number;
  appointmentDetail: any;
  prefix = config.backend_url
  userRole: string

  constructor(private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService, private localStorage: LocalStorageService,
    private toastService: ToastService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.id;
    }) 
    
    this.userRole = this.localStorage.getUserRole()

    this.getAppointmentDetail()

    if(this.userRole === '3'){  
      this.socket.on('endAppointment', (arg) => {
        if(arg.socketId) {
          this.toastService.generalCenterToast('The Ustaad has Ended the Service!')
          this.router.navigate(['rating', this.app_id])
        }
      })
    }
  }

  getAppointmentDetail() {
    this.appointmentService.getAppointmentDetail(this.app_id, 2)
    .subscribe((result: any) => {
      this.appointmentDetail = result.data.length ? result.data[0] : null;
    })
  }

  onEndAppointment() {
    this.appointmentService.updateAppointmentStatus(this.app_id, 3)
    .subscribe((result: any) => {
      if(result.success) {
        this.router.navigate(['rating', this.app_id])
      }
    })
  }
}
