import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomobileDetailsPage } from './automobile-details.page';

const routes: Routes = [
  {
    path: '',
    component: AutomobileDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomobileDetailsPageRoutingModule {}
