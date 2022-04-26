import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';

@Component({
  selector: 'app-accepted-appointment',
  templateUrl: './accepted-appointment.page.html',
  styleUrls: ['./accepted-appointment.page.scss'],
})
export class AcceptedAppointmentPage implements OnInit {
  app_id: number
  appointmentDetail

  constructor(private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.id;
    })
  }

  onStart(){
    this.router.navigate(['ustaad/ongoing-appointment', this.app_id])
  }
}
