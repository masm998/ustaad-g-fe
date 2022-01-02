import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CustomerRoutingModule } from './customer-routing.module';
import { UserDashboardPage } from './user-dashboard/user-dashboard.page';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@NgModule({
  declarations: [
    UserDashboardPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    IonicModule
  ],
  providers: [
    Geolocation
  ],
  exports: [UserDashboardPage]
})
export class CustomerModule { }
