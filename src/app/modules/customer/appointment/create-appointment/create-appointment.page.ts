import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AutomobileService } from 'src/app/core/services/automobile.service';
import { UserService } from 'src/app/core/services/user.service';
import { ModalController, IonDatetime } from '@ionic/angular';
import { SelectLocationComponent } from 'src/app/shared/select-location/select-location.component';
import { ToastService } from 'src/app/core/services/toast.service';
// import moment from 'moment';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.page.html',
  styleUrls: ['./create-appointment.page.scss'],
})
export class CreateAppointmentPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  currentDate: String = new Date().toISOString();
  app_type: string
  scheduled: boolean = false
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
      address: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      date: new FormControl(this.currentDate)
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
      const addressString = this.location.house? `House ${this.location.house}, ${this.location.street}, ${this.location.area}, ${this.location.city}` : `${this.location.area}, ${this.location.city}`
      this.location.address = addressString
      const locationValue = document.getElementById('location')
      locationValue.setAttribute('value', addressString)
    });

    return await modal.present();
  }

  appType(e) {
    this.app_type = e.detail.value
    console.log('type: ', this.app_type, typeof(this.app_type))
    if(this.app_type === '2') this.scheduled = true
    else {
      this.scheduled = false
    }
  }

  onCreate() {
    if(this.createAppointment.valid) {
      this.appointmentService.createAppointment(this.createAppointment.value, this.location)
      .subscribe((res: any) => {
        console.log(res)
        if(res.success){
          this.toastService.loginSuccessToast('Appointment Created Successfully!')
          this.router.navigate(['customer/appointment/searching-mechanic', res.data[0].appointment_id])
        }
      })
      }
      else {
        this.toastService.loginFailureToast('Invalid Form Values')
      }
  }
}
