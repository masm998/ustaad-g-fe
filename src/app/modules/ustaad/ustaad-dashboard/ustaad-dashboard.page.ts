import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MechanicService } from 'src/app/core/services/mechanic.service'
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-ustaad-dashboard',
  templateUrl: './ustaad-dashboard.page.html',
  styleUrls: ['./ustaad-dashboard.page.scss'],
})
export class UstaadDashboardPage implements AfterViewInit {

  constructor(private mechanicService: MechanicService, private toastService: ToastService) { }

  ngAfterViewInit() {
    this.getAppointmentRequests()
  }

  getAppointmentRequests() {
    this.mechanicService.getActiveAppointmentRequests()
    .subscribe((res: any) => {
      console.log('response of appointment requests: ', res)
      if(res.success) {
        let data = res.data
        data.forEach((item) => {
          this.toastService.requestToast('You have a service request for ' + item.service_name, item.app_id)
        })
      }
    })
  }

}
