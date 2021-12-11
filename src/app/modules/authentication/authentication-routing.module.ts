import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-role',
    pathMatch: 'full'
  },
  {
    path: 'select-role',
    loadChildren: () => import("./sign-up-role/sign-up-role.module").then( m => m.SignInRolePageModule)
  },
  {
    path: 'sign-up-customer',
    loadChildren: () => import('./sign-up-customer/sign-up-customer.module').then( m => m.SignUpCustomerPageModule)
  },
  {
    path: 'sign-up-ustaad',
    loadChildren: () => import('./sign-up-ustaad/sign-up-ustaad.module').then( m => m.SignUpUstaadPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
