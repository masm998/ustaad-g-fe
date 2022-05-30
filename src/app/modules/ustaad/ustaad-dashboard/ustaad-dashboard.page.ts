import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MechanicService } from 'src/app/core/services/mechanic.service'
import { ToastService } from 'src/app/core/services/toast.service';
import { io } from 'socket.io-client'
import { ModalController } from '@ionic/angular';
import { RequestModalComponent } from 'src/app/shared/request-modal/request-modal.component';

@Component({
  selector: 'app-ustaad-dashboard',
  templateUrl: './ustaad-dashboard.page.html',
  styleUrls: ['./ustaad-dashboard.page.scss'],
})
export class UstaadDashboardPage implements OnInit, AfterViewInit {
  socket = io('ws://localhost:3000')
  count: number = 0

  constructor(private mechanicService: MechanicService, private toastService: ToastService, private modalController: ModalController) { }

  ngOnInit() {
    this.getAppointmentRequestsCount()
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
}
