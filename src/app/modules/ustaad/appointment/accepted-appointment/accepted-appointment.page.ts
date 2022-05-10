import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-accepted-appointment',
  templateUrl: './accepted-appointment.page.html',
  styleUrls: ['./accepted-appointment.page.scss'],
})
export class AcceptedAppointmentPage implements OnInit {
  location
  app_id: number
  appointmentDetail
  user: string
  disabled = false

  constructor(private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService, private router: Router,
    private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.id;
    })

    this.location = {
      latitude: 33.652385,
      longitude: 72.959587
    }
    if(this.localStorage.getUserRole() == '2') {
      this.user = 'User'
    }
    else {
      this.user = 'Mechanic'
    }
  }

  updatedLocation(e) {
    if(e.latitude === this.location.latitude && e.longitude === this.location.longitude) {
      this.disabled = false
    }
  }

  onStart(){
    this.router.navigate(['ustaad/ongoing-appointment', this.app_id])
  }
}
