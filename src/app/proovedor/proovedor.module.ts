import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProovedorComponent } from './proovedor.component';
import { FormsModule } from '@angular/forms';
import { ProovedorRoutingModule } from './proovedor-routing.module';

import { PrimeNGModule } from '../primeNg.module';
@NgModule({
  declarations: [ProovedorComponent],
  imports: [CommonModule, ProovedorRoutingModule, FormsModule, PrimeNGModule],
})
export class ProovedorModule {}
