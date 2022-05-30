import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { config } from 'src/environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {
  slideOpts = {
    initialSlide: 0.5,
    speed: 600
  };
  prefix = config.backend_url
  servicesList: any
  recentAppointments: []
  // stars = [{id: 1, value: false}, {id: 2, value: false}, {id: 3, value: false}, {id: 4, value: false}, {id: 5, value: false}]

  constructor(private authService: AuthService, private userService: UserService, private router: Router, private appointmentService: AppointmentService) {
   }

  ngOnInit() {
    this.getServices()
    this.getRecentAppointments()
  }

  getServices() {
    this.userService.getServices()
    .subscribe((res: any) => {
      if(res.success) {
        this.servicesList = res.data
      }
    })
  }

  getRecentAppointments() {
    this.appointmentService.getUserRecentAppointments()
    .subscribe((res: any) => {
      if(res.success) {
        this.recentAppointments = res.data
        console.log(this.recentAppointments)
        this.recentAppointments.forEach((app: any) => {
          const m = moment.utc(app.date)
          app.date = m.format('D-MM-YY hh:mm a')
          const appPoints = app.points ? app.points : 0
          app.points = []
          for(let i = 0; i < appPoints; i++) {
            app.points.push(true)
          }
          for(let i = appPoints; i < 5; i++) {
            app.points.push(false)
          }
        })
        
      }
    })
  }

  onCreateAppointment() {
    this.router.navigate(['customer/appointment/create-appointment'])
  }

  onClickService(id) {
    this.router.navigate(['/service-detail', id])
  }
  
  clickAppointment(appointmentId){
    console.log('id: ', appointmentId)
    this.router.navigate(['appointment-detail', appointmentId])
  }
}
