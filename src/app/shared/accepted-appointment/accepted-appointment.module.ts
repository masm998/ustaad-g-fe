import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptedAppointmentPage } from './accepted-appointment.page';
import { TrackingMapModule } from '../tracking-map/tracking-map.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackingMapModule
  ],
  declarations: [AcceptedAppointmentPage]
})
export class AcceptedAppointmentModule {}
