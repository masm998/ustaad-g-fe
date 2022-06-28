import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.page.html',
  styleUrls: ['./appointment-list.page.scss'],
})
export class AppointmentListPage implements OnInit {
  app_type : number;

  constructor(private appointmentService: AppointmentService, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.app_type = params.type
    })
    this.getAppointmentList()
  }

  getAppointmentList() {
    this.appointmentService.getAppointmentList(this.app_type)
    .subscribe((res: any) => {
      console.log(res)
    })
  }
  

  
}

