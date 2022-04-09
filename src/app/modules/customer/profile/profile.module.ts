import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { ProfileSettingPage } from './profile-setting/profile-setting.page';
import { AddressesPageModule } from 'src/app/shared/addresses/addresses.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    AddressesPageModule
  ],
  declarations: [ProfilePage,
  ProfileSettingPage]
})
export class ProfilePageModule {}
