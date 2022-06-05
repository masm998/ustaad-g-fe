import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { config } from 'src/environments/environment';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.page.html',
  styleUrls: ['./appointment-detail.page.scss'],
})
export class AppointmentDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService) { }
  app_id: number
  status: number
  appointmentDetail
  prefix = config.backend_url

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.id;
      this.status = param.status
    })
    this.getAppointmentDetail()
  }

  getAppointmentDetail() {
    this.appointmentService.getAppointmentDetail(this.app_id, this.status)
    .subscribe((result: any) => {
      console.log(result)
      this.appointmentDetail = result.data[0]
    })
  }

}
