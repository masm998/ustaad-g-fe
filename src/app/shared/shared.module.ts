import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component'
import { SelectLocationComponent } from './select-location/select-location.component';
import { GoogleMapComponent } from './google-map/google-map.component';


@NgModule({
  declarations: [
    HeaderComponent,
    GoogleMapComponent,
    SelectLocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SelectLocationComponent
  ]
})
export class SharedModule { }
