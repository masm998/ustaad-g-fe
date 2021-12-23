import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module'
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/header/header.component'
import { UserDashboardPageRoutingModule } from './user-dashboard-routing.module';

import { UserDashboardPage } from './user-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HeaderComponent,
    UserDashboardPageRoutingModule
  ],
  declarations: [UserDashboardPage]
})
export class UserDashboardPageModule {}
