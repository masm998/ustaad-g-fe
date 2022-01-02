import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component'
// import { GoogleMapComponent } from './google-map/google-map.component';


@NgModule({
  declarations: [
    HeaderComponent,
    // GoogleMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
