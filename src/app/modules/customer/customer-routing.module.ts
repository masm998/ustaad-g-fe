import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { UserDashboardPage} from './user-dashboard/user-dashboard.page';

const routes: Routes = [
  {
    path: '',
    redirectTo :'base/tabs/UserHome',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: UserDashboardPage
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'automobile',
    loadChildren: () => import('./automobile/automobile.module').then( m => m.AutomobilePageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
