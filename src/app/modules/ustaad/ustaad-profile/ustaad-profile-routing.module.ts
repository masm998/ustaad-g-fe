import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UstaadProfilePage } from './ustaad-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UstaadProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UstaadProfilePageRoutingModule {}
