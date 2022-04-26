import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddressesPage } from './shared/addresses/addresses.page';
import { AppointmentDetailPage } from './shared/appointment-detail/appointment-detail.page';
import { GoogleMapComponent } from './shared/google-map/google-map.component';
import { ServiceDetailPage } from './shared/service-detail/service-detail.page';


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
    path: 'appointment-detail/:id',
    component: AppointmentDetailPage
  },
  {
    path: 'addresses',
    component: AddressesPage
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
