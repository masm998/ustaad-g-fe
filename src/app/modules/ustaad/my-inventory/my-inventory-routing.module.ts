import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyInventoryPage } from './my-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: MyInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyInventoryPageRoutingModule {}
