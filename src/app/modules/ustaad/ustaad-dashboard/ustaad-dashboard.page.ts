import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MechanicService } from 'src/app/core/services/mechanic.service'
import { ToastService } from 'src/app/core/services/toast.service';
import { io } from 'socket.io-client'
import { ModalController } from '@ionic/angular';
import { RequestModalComponent } from 'src/app/shared/request-modal/request-modal.component';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import * as moment from 'moment'
import { config } from 'src/environments/environment';

@Component({
  selector: 'app-ustaad-dashboard',
  templateUrl: './ustaad-dashboard.page.html',
  styleUrls: ['./ustaad-dashboard.page.scss'],
})
export class UstaadDashboardPage implements OnInit, AfterViewInit {
  socket = io('ws://localhost:3000')
  prefix = config.backend_url
  count: number = 0
  appointments = []
  scheduledAppointments = []

  constructor(private mechanicService: MechanicService, private toastService: ToastService, private modalController: ModalController,
     private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.getAppointmentRequestsCount()
    this.getAppointments()
  }

  ngAfterViewInit() {
    this.socket.on('createAppointment', (arg) => {
      console.log('socket: ', arg, this.count)
      if(arg.socketId) {
        if(this.count > 0)
        {
          this.onShowRequests()
        }
      }
    })
  }

  getAppointmentRequestsCount() {
    this.mechanicService.getActiveAppointmentRequests()
    .subscribe((res: any) => {
      if(res.success) {
        let data = res.data
        data = data.map((d) => {
          if(d.expertise.includes(d.service_name)) {
            this.count++
            return d
          }
        })
        .filter((d) => {return d!== undefined})
        if(this.count > 0)
        {
          this.onShowRequests()
        }
      }
    })
  }

  async onShowRequests() {
    const modal = await this.modalController.create({
      component: RequestModalComponent,
      cssClass: 'request-modal-css',
      backdropDismiss: true
    });
    modal.onDidDismiss().then((data) => {
    });

    return await modal.present();
  }

  getScheduledAppointments() {
    
  }
  getAppointments(){
    this.appointmentService.getUstaadAppointments()
    .subscribe((res: any) => {
      if(res.success) {
        this.appointments = res.data
        
        this.appointments.forEach((app: any, index, object) => {
          const m = moment.utc(app.date)
          app.date = m.format('D-MM-YY hh:mm a')
          const appPoints = app.points ? app.points : 0
          app.points = []
          for(let i = 0; i < appPoints; i++) {
            app.points.push(true)
          }
          for(let i = appPoints; i < 5; i++) {
            app.points.push(false)
          }

          if(app.appointment_type == 2){
            this.scheduledAppointments.push(app)
            this.appointments.splice(index, 1)
          }
        })
        console.log(this.appointments)
      }
    })
  }
}
