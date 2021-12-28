import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UstaadDashboardPage } from './ustaad-dashboard/ustaad-dashboard.page';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: ()=> import('./ustaad-profile/ustaad-profile.module').then( m => m.UstaadProfilePageModule)
  },
  {
    path: 'ustaad-dashboard',
    component: UstaadDashboardPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UstaadRoutingModule { }
