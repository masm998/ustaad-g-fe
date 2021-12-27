import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import {SignUpRolePage} from './sign-up-role/sign-up-role.page'
import {SignUpCustomerPage} from './sign-up-customer/sign-up-customer.page'
import {SignUpUstaadPage} from './sign-up-ustaad/sign-up-ustaad.page'
import {SignInPage} from './sign-in/sign-in.page'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'select-role',
    component: SignUpRolePage 
  },
  {
    path: 'sign-up-customer',
    component: SignUpCustomerPage
    
  },
  {
    path: 'sign-up-ustaad',
    component: SignUpUstaadPage
  }, 
  {
    path: 'sign-in',
    component: SignInPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
