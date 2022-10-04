import { Component, OnInit } from '@angular/core';
import { cityServices } from './service/city.service';

@Component({
  selector: 'app-proovedor',
  templateUrl: './proovedor.component.html',
  styleUrls: ['./proovedor.component.scss'],
})
export class ProovedorComponent implements OnInit {
  model = {
    CIUDADID: '',
    CP: undefined,
    PROVINCIA: '',
  };
  constructor(private citySvc: cityServices) {}

  createCity(): void {
    this.citySvc.createCity(this.model).pipe().subscribe();
  }

  ngOnInit(): void {}
}
