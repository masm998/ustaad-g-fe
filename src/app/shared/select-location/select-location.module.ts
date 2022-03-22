import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { SelectLocationComponent } from './select-location.component';
import { GoogleMapModule } from '../google-map/google-map.module';


@NgModule({
  declarations: [
    SelectLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapModule
  ]
})
export class SelectLocationModule { }
