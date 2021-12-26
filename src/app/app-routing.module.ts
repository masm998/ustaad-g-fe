import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'base/tabs/home',
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
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
