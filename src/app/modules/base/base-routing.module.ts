import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from '../customer/profile/profile.page'
import { BasePage } from './base.page';
import { UserDashboardPage } from '../customer/user-dashboard/user-dashboard.page'
import { AuthGuard } from 'src/app/core/guards/auth-guard.service';
import { UstaadAuthGuard } from 'src/app/core/guards/ustaad-auth-guard.service';
import { UstaadProfilePage } from '../ustaad/ustaad-profile/ustaad-profile.page';
import { UstaadDashboardPage } from '../ustaad/ustaad-dashboard/ustaad-dashboard.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: BasePage, 
    children: [
      {
        path: 'UserHome',
        component: UserDashboardPage,
        // canActivate: [AuthGuard]
      },
      {
        path: 'UserProfile',
        component: ProfilePage,
        // canActivate: [AuthGuard]
      },
      {
        path: 'UstaadHome',
        component: UstaadDashboardPage,
        // canActivate: [UstaadAuthGuard]
      },
      {
        path: 'UstaadProfile',
        component: UstaadProfilePage,
        // canActivate: [UstaadAuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasePageRoutingModule {}
