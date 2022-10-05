import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CargarClienteComponent } from './cargar-cliente/cargar-cliente.component';
import { FormsModule } from '@angular/forms';

import { PrimeNGModule } from '../primeNg.module';

@NgModule({
  declarations: [UserComponent, CargarClienteComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, PrimeNGModule],
})
export class UserModule {}
