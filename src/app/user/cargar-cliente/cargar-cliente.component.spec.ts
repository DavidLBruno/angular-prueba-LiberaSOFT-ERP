import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarClienteComponent } from './cargar-cliente.component';

describe('CargarClienteComponent', () => {
  let component: CargarClienteComponent;
  let fixture: ComponentFixture<CargarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
