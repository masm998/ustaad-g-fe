import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CustomerRoutingModule } from './customer-routing.module';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

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
    Geolocation,
    NativeGeocoder
  ]
})
export class CustomerModule { }
