import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CustomerRoutingModule } from './customer-routing.module';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    IonicModule
  ],
  providers: [
    Geolocation
  ]
})
export class CustomerModule { }
