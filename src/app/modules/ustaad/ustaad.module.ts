import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UstaadRoutingModule } from './ustaad-routing.module';
import { AppointmentRequestPage } from './appointment/appointment-request/appointment-request.page';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AppointmentRequestPage],
  imports: [
    CommonModule,
    UstaadRoutingModule,
    IonicModule,
    SharedModule
  ],
  exports: [AppointmentRequestPage]
})
export class UstaadModule { }
