import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { GoogleMapComponent } from './google-map.component';

@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    GoogleMapComponent
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    GoogleMapComponent
  ]
})
export class GoogleMapModule { }
