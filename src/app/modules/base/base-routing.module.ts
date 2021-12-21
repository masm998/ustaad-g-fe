import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        component: UserDashboardPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasePageRoutingModule {}
