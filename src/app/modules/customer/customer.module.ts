import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CustomerRoutingModule } from './customer-routing.module';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    IonicModule,
    SharedModule
  ],
  providers: [
    Geolocation,
    NativeGeocoder
  ]
})
export class CustomerModule { }
