import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
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
import { AcceptedAppointmentModule } from './accepted-appointment/accepted-appointment.module';
import { OngoingAppointmentPage } from './ongoing-appointment/ongoing-appointment.page';
import { RequestModalModule } from './request-modal/request-modal.module';
import { RatingModule } from './rating/rating.module';
import { ProfilePictureModule } from './profile-picture/profile-picture.module';
import { AppointmentListPage } from './appointment-list/appointment-list.page';

@NgModule({
  declarations: [
    HeaderComponent, OngoingAppointmentPage, AppointmentListPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SelectLocationModule,
    ServiceDetailModule,
    ChangePasswordModule,
    AddressesPageModule,
    AppointmentDetailModule,
    TrackingMapModule,
    AcceptedAppointmentModule,
    RequestModalModule,
    ProfilePictureModule
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    GoogleMapModule,
    TrackingMapModule,
    RatingModule,
    ProfilePictureModule,
    OngoingAppointmentPage
  ]
})
export class SharedModule { }
