import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component'
import { SelectLocationComponent } from './select-location/select-location.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ServiceDetailPage } from './service-detail/service-detail.page';
import { AppointmentDetailPage } from './appointment-detail/appointment-detail.page';

@NgModule({
  declarations: [
    HeaderComponent,
    GoogleMapComponent,
    SelectLocationComponent,
    ServiceDetailPage,
    AppointmentDetailPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SelectLocationComponent,
    ServiceDetailPage,
    AppointmentDetailPage
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    SelectLocationComponent,
    ServiceDetailPage,
    AppointmentDetailPage
  ]
})
export class SharedModule { }
