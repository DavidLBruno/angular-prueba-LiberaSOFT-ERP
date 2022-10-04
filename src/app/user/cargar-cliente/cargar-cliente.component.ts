import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServices } from '../service/user.service';

@Component({
  selector: 'app-cargar-cliente',
  templateUrl: './cargar-cliente.component.html',
  styleUrls: ['./cargar-cliente.component.scss'],
})
export class CargarClienteComponent implements OnInit {
  model = {
    name: '',
    mail: '',
    password: '',
  };
  constructor(private userSvc: UserServices) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.userSvc.userRegister(this.model).pipe().subscribe();
  }
}
