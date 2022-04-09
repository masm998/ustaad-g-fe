import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ServiceDetailModule } from './service-detail/service-detail.module';
import { AppointmentDetailPage } from './appointment-detail/appointment-detail.page';
import { SelectLocationModule } from './select-location/select-location.module';
import { GoogleMapModule } from './google-map/google-map.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { AddressesPageModule } from './addresses/addresses.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AppointmentDetailPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SelectLocationModule,
    ServiceDetailModule,
    AppointmentDetailPage,
    ChangePasswordModule,
    AddressesPageModule
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    GoogleMapModule,
    AppointmentDetailPage
  ]
})
export class SharedModule { }
