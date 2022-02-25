import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AutomobileService } from 'src/app/core/services/automobile.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-add-automobile',
  templateUrl: './add-automobile.page.html',
  styleUrls: ['./add-automobile.page.scss'],
})
export class AddAutomobilePage implements OnInit {
  addAutomobile: FormGroup
  carTypes: any
  constructor(private router: Router, private automobileService: AutomobileService, private toastService: ToastService) { }

  ngOnInit() {
    this.addAutomobile= new FormGroup({
      car_type: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      model: new FormControl("", [Validators.required]),
      color: new FormControl("", [Validators.required]),
    })
    this.getCarType()
  }

  getCarType() {
    this.automobileService.getCarType()
    .subscribe((res: any) => {
      this.carTypes = res.data
    })
  }
  onCreate() {
    if(this.addAutomobile.valid) {
      this.automobileService.addAutomobile(this.addAutomobile.value)
      .subscribe((res: any) => {
        console.log('res of adding automobile: ', res)
        if(res.success) {
          this.router.navigate(['customer/automobile'])
        }
      })
    }
    else {
      this.toastService.loginFailureToast('Invalid Form Values')
    }
  }
}
