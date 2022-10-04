import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: '/cities' },
      {
        label: 'Usuario',
        icon: 'pi pi-user',
        routerLink: '/user/cargarCliente',
      },
      { label: 'Proovedor', icon: 'pi pi-car', routerLink: '/proovedor' },
    ];
  }
}
