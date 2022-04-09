import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UstaadProfilePageRoutingModule } from './ustaad-profile-routing.module';

import { UstaadProfilePage } from './ustaad-profile.page';
import { UstaadProfileSettingsPageModule } from './ustaad-profile-settings/ustaad-profile-settings.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UstaadProfileSettingsPageModule,
    UstaadProfilePageRoutingModule
  ],
  declarations: [UstaadProfilePage]
})
export class UstaadProfilePageModule {}
