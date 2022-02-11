import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AutomobileService } from 'src/app/core/services/automobile.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.page.html',
  styleUrls: ['./create-appointment.page.scss'],
})
export class CreateAppointmentPage implements OnInit {
  createAppointment: FormGroup
  automobiles : [] 
  services : []
  constructor(private router: Router, private appointmentService: AppointmentService,
     private automobileService : AutomobileService, private userService: UserService) { }

  ngOnInit() {
    this.createAppointment = new FormGroup({
      car: new FormControl('', [Validators.required]),
      service: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      location: new FormControl({value: '', disabled: true}, [Validators.required]),
      time: new FormControl('', [Validators.required]),
    })
    this.getUserAutomobiles()
    this.getServices()
  }

  getUserAutomobiles() {
    this.automobileService.getAutomobileForAppointment()
    .subscribe((res: any) =>{
      if(res.success) {
        this.automobiles = res.data
      }
    })
  }
  
  getServices() {
    this.userService.getServices()
    .subscribe((res : any) => {
      if(res.success){
        this.services = res.data;
      }
    })
  }

  chooseLocation() {
    console.log('location clicked')
    this.router.navigate(['select-location'])
  }

  onCreate() {
    if(this.createAppointment.valid) {
      this.appointmentService.createAppointment(this.createAppointment.value)
      .subscribe((res: any) => {
        if(res.success){
          console.log(res)
        }
      })
    }
  }
}
