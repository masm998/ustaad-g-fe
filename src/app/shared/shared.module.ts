import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component'
import { SelectLocationComponent } from './select-location/select-location.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


@NgModule({
  declarations: [
    HeaderComponent,
    GoogleMapComponent,
    SelectLocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SelectLocationComponent
  ],
  providers: [
    Geolocation,
    NativeGeocoder
  ]
})
export class SharedModule { }
