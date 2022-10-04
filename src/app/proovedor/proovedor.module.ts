import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProovedorRoutingModule } from './proovedor-routing.module';
import { ProovedorComponent } from './proovedor.component';


@NgModule({
  declarations: [
    ProovedorComponent
  ],
  imports: [
    CommonModule,
    ProovedorRoutingModule
  ]
})
export class ProovedorModule { }
