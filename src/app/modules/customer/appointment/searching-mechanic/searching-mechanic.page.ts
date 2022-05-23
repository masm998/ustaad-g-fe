import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { config } from 'src/environments/environment';
import { io } from 'socket.io-client'
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-searching-mechanic',
  templateUrl: './searching-mechanic.page.html',
  styleUrls: ['./searching-mechanic.page.scss'],
})
export class SearchingMechanicPage implements OnInit {
  socket = io('ws://localhost:3000')
  appointmentId: number
  prefix = config.backend_url
  appointmentData: any
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService, private toastService: ToastService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.appointmentId = params.appointmentId;
    })

    this.getAppointmentData();
    this.socket.on('acceptAppointment', (arg) => {
      if(arg.socketId) {
        console.log('arg: ', arg)
        this.router.navigate(['accepted-appointment', this.appointmentId])
      }
    })
  }

  getAppointmentData() {
    this.appointmentService.appointmentDataForSearchMechanic(this.appointmentId)
    .subscribe((res: any) => {
      if(res.success) {
        this.appointmentData = res.data[0]
        this.appointmentData.address = this.appointmentData.address.replaceAll('undefined','');
      }
    })
  }

  onCancel() {
    this.appointmentService.updateAppointmentStatus(this.appointmentId, 4)
    .subscribe((result: any) => {
      if(result.success) {
        this.toastService.generalToast('Appointment Cancelled!')
        this.router.navigate(['customer/appointment/create-appointment'])
      }
    })
  }
}
