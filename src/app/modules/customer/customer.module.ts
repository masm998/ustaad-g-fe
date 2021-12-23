import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module'
import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from 'src/app/shared/header/header.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    HeaderComponent
  ]
})
export class CustomerModule { }
