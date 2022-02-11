import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UstaadDashboardPage } from './ustaad-dashboard/ustaad-dashboard.page';
import { UstaadAuthGuard } from 'src/app/core/guards/ustaad-auth-guard.service';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: ()=> import('./ustaad-profile/ustaad-profile.module').then( m => m.UstaadProfilePageModule),
    // canActivate: [UstaadAuthGuard]
  },
  {
    path: 'ustaad-dashboard',
    component: UstaadDashboardPage,
    // canActivate: [UstaadAuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UstaadRoutingModule { }
