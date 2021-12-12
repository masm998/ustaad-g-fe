import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpRolePage } from './sign-up-role.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRolePageRoutingModule {}
