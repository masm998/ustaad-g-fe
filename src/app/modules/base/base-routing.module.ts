import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from '../customer/profile/profile.page'
import { BasePage } from './base.page';
import { UserDashboardPage } from '../customer/user-dashboard/user-dashboard.page'
const routes: Routes = [
  {
    path: 'tabs',
    component: BasePage, 
    children: [
      {
        path: 'home',
        component: UserDashboardPage
      },
      {
        path: 'profile',
        component: ProfilePage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasePageRoutingModule {}
