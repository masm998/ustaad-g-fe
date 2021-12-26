import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomobileDetailsPageRoutingModule } from './automobile-details-routing.module';

import { AutomobileDetailsPage } from './automobile-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomobileDetailsPageRoutingModule
  ],
  declarations: [AutomobileDetailsPage]
})
export class AutomobileDetailsPageModule {}
