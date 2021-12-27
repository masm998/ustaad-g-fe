import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomobilePage } from './automobile.page';
import { AutomobileDetailsPage } from './automobile-details/automobile-details.page';
const routes: Routes = [
  {
    path: '',
    component: AutomobilePage
  },
  {
    path: 'automobile-details',
    component: AutomobileDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomobilePageRoutingModule {}
