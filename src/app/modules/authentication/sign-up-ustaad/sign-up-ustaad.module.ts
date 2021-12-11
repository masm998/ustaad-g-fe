import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpUstaadPageRoutingModule } from './sign-up-ustaad-routing.module';

import { SignUpUstaadPage } from './sign-up-ustaad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpUstaadPageRoutingModule
  ],
  declarations: [SignUpUstaadPage]
})
export class SignUpUstaadPageModule {}
