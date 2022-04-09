import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UstaadProfileSettingsPage } from './ustaad-profile-settings/ustaad-profile-settings.page';

import { UstaadProfilePage } from './ustaad-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UstaadProfilePage
  },
  {
    path: 'ustaad-profile-settings',
    component: UstaadProfileSettingsPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UstaadProfilePageRoutingModule {}
