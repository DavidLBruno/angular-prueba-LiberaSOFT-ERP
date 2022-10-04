import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProovedorComponent } from './proovedor.component';

const routes: Routes = [{ path: '', component: ProovedorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProovedorRoutingModule { }
