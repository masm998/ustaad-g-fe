import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { config } from 'src/environments/environment';

@Component({
  selector: 'app-searching-mechanic',
  templateUrl: './searching-mechanic.page.html',
  styleUrls: ['./searching-mechanic.page.scss'],
})
export class SearchingMechanicPage implements OnInit {
  appointmentId: number
  prefix = config.backend_url
  appointmentData: any
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.appointmentId = params.appointmentId;
    })

    this.getAppointmentData();
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
}
