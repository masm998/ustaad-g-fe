import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth-guard.service';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    //HD services below
  ],
  entryComponents: [
  ]
})
export class CoreModule { }
