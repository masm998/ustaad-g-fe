import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpCustomerPage } from './sign-up-customer.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpCustomerPageRoutingModule {}
