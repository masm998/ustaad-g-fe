import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { TrackingMapComponent } from './tracking-map.component';

@NgModule({
  declarations: [
    TrackingMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    TrackingMapComponent
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    TrackingMapComponent
  ]
})
export class TrackingMapModule { }
