import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { AppointmentDetailPage } from './appointment-detail.page';

@NgModule({
  declarations: [
    AppointmentDetailPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class AppointmentDetailModule { }
