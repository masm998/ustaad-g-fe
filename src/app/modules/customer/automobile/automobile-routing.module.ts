import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomobilePage } from './automobile.page';

const routes: Routes = [
  {
    path: '',
    component: AutomobilePage
  },
  {
    path: 'automobile-details',
    loadChildren: () => import('./automobile-details/automobile-details.module').then( m => m.AutomobileDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomobilePageRoutingModule {}
