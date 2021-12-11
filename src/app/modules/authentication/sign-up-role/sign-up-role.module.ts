import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInRolePageRoutingModule } from './sign-up-role-routing.module';

import { SignInRolePage } from './sign-up-role.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInRolePageRoutingModule
  ],
  declarations: [SignInRolePage]
})
export class SignInRolePageModule {}
