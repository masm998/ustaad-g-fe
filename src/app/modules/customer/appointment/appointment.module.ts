import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentPageRoutingModule } from './appointment-routing.module';
import { CreateAppointmentPage } from './create-appointment/create-appointment.page';
import { AppointmentPage } from './appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AppointmentPageRoutingModule,
    SharedModule
  ],
  declarations: [
    AppointmentPage,
    CreateAppointmentPage,
  ]
})
export class AppointmentPageModule {}
