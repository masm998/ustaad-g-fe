import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileSettingPage } from './profile-setting.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileSettingPageRoutingModule {}
