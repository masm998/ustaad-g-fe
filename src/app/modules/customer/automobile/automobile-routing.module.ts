import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomobilePage } from './automobile.page';
import { AutomobileDetailsPage } from './automobile-details/automobile-details.page';
import { AddAutomobilePage } from './add-automobile/add-automobile.page';
const routes: Routes = [
  {
    path: '',
    component: AutomobilePage
  },
  {
    path: 'automobile-details/:carId',
    component: AutomobileDetailsPage
  },
  {
    path: 'add-automobile',
    component: AddAutomobilePage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomobilePageRoutingModule {}
