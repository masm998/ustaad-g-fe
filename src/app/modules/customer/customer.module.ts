import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module'
import { CustomerRoutingModule } from './customer-routing.module';
import { UserDashboardPage } from './user-dashboard/user-dashboard.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    UserDashboardPage
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class CustomerModule { }
