import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomobilePageRoutingModule } from './automobile-routing.module';
import { AddAutomobilePage } from './add-automobile/add-automobile.page';
import { AutomobilePage } from './automobile.page';
import { AutomobileDetailsPage } from './automobile-details/automobile-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AutomobilePageRoutingModule
  ],
  declarations: [AutomobilePage, AddAutomobilePage, AutomobileDetailsPage]
})
export class AutomobilePageModule {}
