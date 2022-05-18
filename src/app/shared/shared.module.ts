import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ServiceDetailModule } from './service-detail/service-detail.module';
import { SelectLocationModule } from './select-location/select-location.module';
import { GoogleMapModule } from './google-map/google-map.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { AddressesPageModule } from './addresses/addresses.module';
import { AppointmentDetailModule } from './appointment-detail/appointment-detail.module';
import { TrackingMapModule } from './tracking-map/tracking-map.module';
import { RatingComponent } from './rating/rating.component';
import { AcceptedAppointmentModule } from './accepted-appointment/accepted-appointment.module';
import { OngoingAppointmentPage } from './ongoing-appointment/ongoing-appointment.page';

@NgModule({
  declarations: [
    HeaderComponent, OngoingAppointmentPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SelectLocationModule,
    ServiceDetailModule,
    ChangePasswordModule,
    AddressesPageModule,
    AppointmentDetailModule,
    TrackingMapModule,
    AcceptedAppointmentModule
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    GoogleMapModule,
    TrackingMapModule,
    RatingComponent,
    OngoingAppointmentPage
  ]
})
export class SharedModule { }
