import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChangePasswordPage } from './change-password.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ChangePasswordPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChangePasswordModule { }
