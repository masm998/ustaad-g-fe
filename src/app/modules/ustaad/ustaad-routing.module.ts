import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UstaadDashboardPage } from './ustaad-dashboard/ustaad-dashboard.page';
import { UstaadAuthGuard } from 'src/app/core/guards/ustaad-auth-guard.service';
import { AppointmentRequestPage } from './appointment/appointment-request/appointment-request.page';
import { AcceptedAppointmentPage } from './appointment/accepted-appointment/accepted-appointment.page';
import { OngoingAppointmentPage } from './appointment/ongoing-appointment/ongoing-appointment.page';


const routes: Routes = [
  {
    path: 'profile',
    loadChildren: ()=> import('./ustaad-profile/ustaad-profile.module').then( m => m.UstaadProfilePageModule),
    canActivate: [UstaadAuthGuard]
  },
  {
    path: 'ustaad-dashboard',
    component: UstaadDashboardPage,
    canActivate: [UstaadAuthGuard]
  },
  {
    path: 'appointment-request/:id',
    component: AppointmentRequestPage
  },
  {
    path: 'accepted-appointment/:id',
    component: AcceptedAppointmentPage
  },
  {
    path: 'ongoing-appointment/:id',
    component: OngoingAppointmentPage
    
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UstaadRoutingModule { }
