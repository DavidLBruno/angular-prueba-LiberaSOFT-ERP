import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarClienteComponent } from './cargar-cliente/cargar-cliente.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'cargarCliente', component: CargarClienteComponent },
  { path: '', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
