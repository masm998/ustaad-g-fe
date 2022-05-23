import { Component, Input, OnInit } from '@angular/core';
import { MechanicService } from 'src/app/core/services/mechanic.service'
import { ToastService } from 'src/app/core/services/toast.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
  requests

  constructor(private mechanicService: MechanicService, private toastService: ToastService, public modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
    this.getAppointmentRequests()
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  getAppointmentRequests() {
    this.mechanicService.getActiveAppointmentRequests()
    .subscribe((res: any) => {
      if(res.success) {
        let data = res.data
        data = data.map((d) => {
          if(d.expertise.includes(d.service_name)) return d
        })
        .filter((d) => {return d!== undefined})
        this.requests = data
      }
    })
  }

  clickRequest(appId) {
    this.modalController.dismiss()
    this.router.navigate(['ustaad/appointment-request', appId])
  }

  onDismiss(e, id) {
    e.stopPropagation();
    this.requests = this.requests.filter((ele) =>  ele.app_id !== id);
    if(this.requests.length == 0) {
      this.dismiss()
    }
  }

}
