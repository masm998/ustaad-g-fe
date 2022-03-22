import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { ServiceDetailPage } from './service-detail.page';

@NgModule({
  declarations: [
    ServiceDetailPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ServiceDetailModule { }
