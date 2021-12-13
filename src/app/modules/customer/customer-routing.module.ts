import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardPage} from './user-dashboard/user-dashboard.page';

const routes: Routes = [
  {
    path: '',
    redirectTo :'dashboard'
  },
  {
    path: 'dashboard',
    component: UserDashboardPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
