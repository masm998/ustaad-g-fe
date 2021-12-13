import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomobilePageRoutingModule } from './automobile-routing.module';

import { AutomobilePage } from './automobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomobilePageRoutingModule
  ],
  declarations: [AutomobilePage]
})
export class AutomobilePageModule {}
