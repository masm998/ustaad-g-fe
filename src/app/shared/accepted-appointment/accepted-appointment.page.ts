import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { io } from 'socket.io-client'
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-accepted-appointment',
  templateUrl: './accepted-appointment.page.html',
  styleUrls: ['./accepted-appointment.page.scss'],
})
export class AcceptedAppointmentPage implements OnInit {
  socket = io('ws://localhost:3000')
  location
  app_id: number
  appointmentDetail
  user: string
  disabled = false
  userRole

  constructor(private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService, private router: Router,
    private localStorage: LocalStorageService, private toastService: ToastService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.id;
    })

    this.userRole = this.localStorage.getUserRole()

    this.getAppointmentLocation()

    // this.location = {
    //   latitude: 33.652385,
    //   longitude: 72.959587
    // }
    if(this.userRole === '2') {
      this.user = 'User'
    }
    else {
      this.user = 'Mechanic'
      this.socket.on('startAppointment', (arg) => {
        if(arg.socketId) {
          // this.toastService.generalCenterToast('The Ustaad is on his way!')
          this.router.navigate(['ongoing-appointment', this.app_id])
        }
      })
    }
  }

  getAppointmentLocation() {
    this.appointmentService.getAppointmentLocation(this.app_id)
    .subscribe((res: any) => {
      this.location = res.data[0]
    })
  }

  updatedLocation(e) {
    if(e.latitude === this.location.latitude && e.longitude === this.location.longitude) {
      this.disabled = false
    }
  }

  onCancel() {
    this.appointmentService.updateAppointmentStatus(this.app_id, 4)
    .subscribe((result: any) => {
      if(result.success) {
        this.toastService.generalToast('Appointment Cancelled!')
        this.router.navigate([''])
      }
    })
  }

  onStart(){
    this.appointmentService.updateAppointmentStatus(this.app_id, 2)
    .subscribe((res: any) => {
      if(res.success) {
        this.router.navigate(['ongoing-appointment', this.app_id])
      }
    })
  }
}
