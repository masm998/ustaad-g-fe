import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomobilePage } from './automobile.page';

const routes: Routes = [
  {
    path: '',
    component: AutomobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomobilePageRoutingModule {}
