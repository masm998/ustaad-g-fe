import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AcceptedAppointmentPage } from './shared/accepted-appointment/accepted-appointment.page';
import { AddressesPage } from './shared/addresses/addresses.page';
import { AppointmentDetailPage } from './shared/appointment-detail/appointment-detail.page';
import { GoogleMapComponent } from './shared/google-map/google-map.component';
import { RatingComponent } from './shared/rating/rating.component';
import { ServiceDetailPage } from './shared/service-detail/service-detail.page';
import { OngoingAppointmentPage } from './shared/ongoing-appointment/ongoing-appointment.page';
import { ProfilePictureComponent } from './shared/profile-picture/profile-picture.component';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'base',
    loadChildren: () => import('./modules/base/base.module').then( m=>m.BasePageModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./modules/authentication/authentication.module').then( m => m.AuthenticationModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module').then( m => m.CustomerModule)
  },
  {
    path: 'ustaad',
    loadChildren: () => import('./modules/ustaad/ustaad.module').then( m => m.UstaadModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./shared/select-location/select-location.module')
  },
  {
    path: 'map',
    component: GoogleMapComponent
  },
  {
    path: 'service-detail/:id',
    component: ServiceDetailPage
  },
  {
    path: 'appointment-detail/:id/:status',
    component: AppointmentDetailPage
  },
  {
    path: 'accepted-appointment/:id',
    component: AcceptedAppointmentPage
  },
  {
    path: 'ongoing-appointment/:id',
    component: OngoingAppointmentPage
  },
  {
    path: 'addresses',
    component: AddressesPage
  },
  {
    path: 'rating/:app_id',
    component: RatingComponent
  },
  {
    path: 'profile-picture',
    component: ProfilePictureComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
