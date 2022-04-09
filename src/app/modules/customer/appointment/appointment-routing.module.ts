import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectLocationComponent } from 'src/app/shared/select-location/select-location.component';

import { AppointmentPage } from './appointment.page';
import { CreateAppointmentPage } from './create-appointment/create-appointment.page';
import { SearchingMechanicPage } from './searching-mechanic/searching-mechanic.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentPage
  },
  {
    path: 'create-appointment',
    component: CreateAppointmentPage
  },
  // {
  //   path: 'searching-mechanic/:appointmentId',
  //   component: SearchingMechanicPage
  // },
  // {
  //   path: 'select-location',
  //   component: SelectLocationComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentPageRoutingModule {}
