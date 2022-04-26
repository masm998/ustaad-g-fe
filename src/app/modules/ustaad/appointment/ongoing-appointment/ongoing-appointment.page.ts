import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { config } from 'src/environments/environment'

@Component({
  selector: 'app-ongoing-appointment',
  templateUrl: './ongoing-appointment.page.html',
  styleUrls: ['./ongoing-appointment.page.scss'],
})
export class OngoingAppointmentPage implements OnInit {
  app_id: any;
  appointmentDetail: any;
  prefix = config.backend_url

  constructor(private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.id;
    })
    this.getAppointmentDetail()
  }

  getAppointmentDetail() {
    this.appointmentService.getAppointmentDetail(this.app_id, 6)
    .subscribe((result: any) => {
      console.log(result)
      this.appointmentDetail = result.data.length ? result.data[0] : null;
      
    })
  }

}
