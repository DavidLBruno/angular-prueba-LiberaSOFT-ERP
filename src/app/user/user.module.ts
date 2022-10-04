import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CargarClienteComponent } from './cargar-cliente/cargar-cliente.component';

@NgModule({
  declarations: [UserComponent, CargarClienteComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
