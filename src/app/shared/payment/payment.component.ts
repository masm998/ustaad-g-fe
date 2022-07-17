import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { config } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  app_id : number;
  chargesDetails;
  prefix = config.backend_url
  

  constructor( private activatedRoute : ActivatedRoute, private appointmentService : AppointmentService, private router : Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.id;
    }) 
    this.getAppointmentCharges()
  }

  getAppointmentCharges(){
    this.appointmentService.getAppointmentCharges(this.app_id)
    .subscribe((res:any) => {
      this.chargesDetails = res.data[0]
      console.log(res)
    })
  }

  onClickSubmit(){
    this.router.navigate(['payment-method', this.app_id ])
  }
}
