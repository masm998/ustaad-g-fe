import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './shared/google-map/google-map.component';
import { SelectLocationComponent } from './shared/select-location/select-location.component';


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
    component: SelectLocationComponent
  },
  {
    path: 'map',
    component: GoogleMapComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
