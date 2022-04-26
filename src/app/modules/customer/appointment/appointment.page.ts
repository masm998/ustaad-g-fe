import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreateAppointment() {
    this.router.navigate(['customer/appointment/create-appointment'])
  }

  onClickAppointment(id) {
    this.router.navigate(['appointment-detail', id])
  }
}
