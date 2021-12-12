import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpRolePageRoutingModule } from './sign-up-role-routing.module';

import { SignUpRolePage } from './sign-up-role.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpRolePageRoutingModule
  ],
  declarations: [SignUpRolePage]
})
export class SignUpRolePageModule {}
