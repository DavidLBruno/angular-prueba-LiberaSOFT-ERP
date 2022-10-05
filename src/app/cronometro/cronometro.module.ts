import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronometroRoutingModule } from './cronometro-routing.module';
import { CronometroComponent } from './cronometro.component';
import { PrimeNGModule } from '../primeNg.module';

@NgModule({
  declarations: [CronometroComponent],
  imports: [CommonModule, CronometroRoutingModule, PrimeNGModule],
})
export class CronometroModule {}
