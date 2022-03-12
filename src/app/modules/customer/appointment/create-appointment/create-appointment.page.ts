import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AutomobileService } from 'src/app/core/services/automobile.service';
import { UserService } from 'src/app/core/services/user.service';
import { ModalController } from '@ionic/angular';
import { SelectLocationComponent } from 'src/app/shared/select-location/select-location.component';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.page.html',
  styleUrls: ['./create-appointment.page.scss'],
})
export class CreateAppointmentPage implements OnInit {
  createAppointment: FormGroup
  automobiles : [] 
  services : []
  location: any
  constructor(private router: Router, private appointmentService: AppointmentService, private modalController: ModalController,
     private automobileService : AutomobileService, private userService: UserService, private activatedRoute: ActivatedRoute,
     private toastService: ToastService) { }

  ngOnInit() {
    this.createAppointment = new FormGroup({
      car: new FormControl('', [Validators.required]),
      service: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      location: new FormControl({value: '', disabled: true}, [Validators.required]),
      type: new FormControl('', [Validators.required]),
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

  async chooseLocation() {
    const modal = await this.modalController.create({
      component: SelectLocationComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      this.location = dataReturned.data;
      console.log('loccccc: ', this.location)
    });

    return await modal.present();
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
    else {
      this.toastService.loginFailureToast('Invalid Form Values')
    }
  }
}
