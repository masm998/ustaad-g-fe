import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';

import { UstaadProfileSettingsPage } from './ustaad-profile-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  declarations: [UstaadProfileSettingsPage]
})
export class UstaadProfileSettingsPageModule {}
