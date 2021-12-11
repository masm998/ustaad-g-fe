import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpUstaadPage } from './sign-up-ustaad.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpUstaadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpUstaadPageRoutingModule {}
