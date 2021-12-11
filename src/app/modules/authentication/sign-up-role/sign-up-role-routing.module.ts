import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInRolePage } from './sign-up-role.page';

const routes: Routes = [
  {
    path: '',
    component: SignInRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInRolePageRoutingModule {}
