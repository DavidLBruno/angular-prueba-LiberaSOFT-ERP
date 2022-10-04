import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProovedorRoutingModule } from './proovedor-routing.module';
import { ProovedorComponent } from './proovedor.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ProovedorComponent],
  imports: [
    CommonModule,
    ProovedorRoutingModule,
    AutoCompleteModule,
    FormsModule,
    ButtonModule,
  ],
})
export class ProovedorModule {}
