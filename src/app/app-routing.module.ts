import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'clock', component: CronometroComponent },
  { path: 'cities', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'proovedor',
    loadChildren: () =>
      import('./proovedor/proovedor.module').then((m) => m.ProovedorModule),
  },
  { path: 'clock', loadChildren: () => import('./cronometro/cronometro.module').then(m => m.CronometroModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
