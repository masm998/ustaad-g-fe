import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { IonicModule } from '@ionic/angular';
import { SignInPage } from './sign-in/sign-in.page';
import { SignUpCustomerPage } from './sign-up-customer/sign-up-customer.page';
import { SignUpRolePage } from './sign-up-role/sign-up-role.page';
import { SignUpUstaadPage } from './sign-up-ustaad/sign-up-ustaad.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    SignInPage,
    SignUpCustomerPage,
    SignUpRolePage,
    SignUpUstaadPage
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoreModule
  ]
})
export class AuthenticationModule { }
