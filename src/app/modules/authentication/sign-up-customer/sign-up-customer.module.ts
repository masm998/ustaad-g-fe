import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpCustomerPageRoutingModule } from './sign-up-customer-routing.module';

import { SignUpCustomerPage } from './sign-up-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpCustomerPageRoutingModule
  ],
  declarations: [SignUpCustomerPage]
})
export class SignUpCustomerPageModule {}
