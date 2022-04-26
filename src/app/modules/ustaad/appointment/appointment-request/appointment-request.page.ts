import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { config } from 'src/environments/environment';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.page.html',
  styleUrls: ['./appointment-request.page.scss'],
})
export class AppointmentRequestPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService, private router: Router) { }
  app_id: number
  appointmentDetail
  prefix = config.backend_url

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.id;
    })
    this.getAppointmentDetail()
  }

  getAppointmentDetail() {
    this.appointmentService.getAppointmentDetail(this.app_id, 1)
    .subscribe((result: any) => {
      console.log(result)
      this.appointmentDetail = result.data.length ? result.data[0] : null;
      if(!this.appointmentDetail) {
        this.router.navigate([''])
      }
    })
  }

  onIgnore() {
    this.router.navigate([''])
  }

  onAccept() {
    this.appointmentService.acceptAppointmentRequest(this.app_id)
    .subscribe((res: any) => {
      console.log('accept appointment result: ', res)
      if(res.success) {
        this.router.navigate(['ustaad/accepted-appointment', this.app_id])
      }
    })
  }
}
