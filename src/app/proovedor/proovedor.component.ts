import { Component, OnInit } from '@angular/core';
import { cityServices } from './service/city.service';
import { PrimeNGConfig } from 'primeng/api';

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
  constructor(
    private citySvc: cityServices,
    private primengConfig: PrimeNGConfig
  ) {}

  createCity(): void {
    this.citySvc.createCity(this.model).pipe().subscribe();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
