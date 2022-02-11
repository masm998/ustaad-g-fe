import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserDashboardPage } from '../customer/user-dashboard/user-dashboard.page';
import { CustomerModule } from '../customer/customer.module';
import { BasePageRoutingModule } from './base-routing.module';
import { UstaadDashboardPage } from '../ustaad/ustaad-dashboard/ustaad-dashboard.page';
import { BasePage } from './base.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasePageRoutingModule,
    CustomerModule
  ],
  declarations: [BasePage, UserDashboardPage, UstaadDashboardPage]
})
export class BasePageModule {}
