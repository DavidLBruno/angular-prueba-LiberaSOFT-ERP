import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Country } from 'src/model/Country';
import { CountriesService } from '../service/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countries: Country[];
  cols: any[];
  items: MenuItem[];
  displaySaveDialog: boolean = false;
  country: Country = {
    ID: null,
    CP: null,
    CIUDADID: null,
    PROVINCIA: null,
  };

  selectedCountry: Country = {
    ID: null,
    CP: null,
    CIUDADID: null,
    PROVINCIA: null,
  };

  constructor(
    private countriesService: CountriesService,
    private messageService: MessageService,
    private confirmService: ConfirmationService
  ) {}

  getAll() {
    this.countriesService.getAll().subscribe(
      (result: any) => {
        let countries: Country[] = [];
        for (let i = 0; i < result.data.length; i++) {
          let country = result.data[i] as Country;
          countries.push(country);
        }
        this.countries = countries;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showSaveDialog(editar: boolean) {
    if (editar) {
      if (this.selectedCountry != null && this.selectedCountry.ID != null) {
        this.country = this.selectedCountry;
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Advertencia!',
          detail: 'Selecciona una ciudad',
        });
        return;
      }
    } else {
      this.country = new Country();
    }
    this.displaySaveDialog = true;
  }

  save() {
    this.countriesService.save(this.country).subscribe(
      (result: any) => {
        let country = result as Country;
        this.validateCountry(country);
        this.messageService.add({
          severity: 'succes',
          summary: 'Resultado',
          detail: 'Se guardo la ciudad correctamente',
        });
        this.displaySaveDialog = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete() {
    if (this.selectedCountry == null || this.selectedCountry.ID == null) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia!',
        detail: 'Selecciona una ciudad',
      });
      return;
    }
    this.confirmService.confirm({
      message: 'Esta seguro de eliminar la ciudad?',
      accept: () => {
        this.countriesService
          .delete(this.selectedCountry.ID)
          .subscribe((result: any) => {
            this.messageService.add({
              severity: 'succes',
              summary: 'Resultado',
              detail: 'Se elimino la ciudad correctamente',
            });
            this.deleteObject(result.ID);
          });
      },
    });
  }

  deleteObject(ID: number) {
    let index = this.countries.findIndex((element) => element.ID == ID);
    if (index != -1) {
      this.countries.splice(index, 1);
    }
  }

  validateCountry(country: Country) {
    let index = this.countries.findIndex((element) => element.ID == country.ID);
    if (index != -1) {
      this.countries[index] = country;
    } else {
      this.countries.push(country);
    }
  }

  ngOnInit(): void {
    this.getAll();
    this.cols = [
      { field: 'ID', header: 'ID' },
      { field: 'CP', header: 'CP' },
      { field: 'CIUDADID', header: 'CIUDAD' },
      { field: 'PROVINCIA', header: 'PROVINCIA' },
    ];

    this.items = [
      {
        label: 'Nuevo',
        icon: 'pi pi-fw pi-plus',
        command: () => this.showSaveDialog(false),
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
        command: () => this.showSaveDialog(true),
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-fw pi-times',
        command: () => this.delete(),
      },
    ];
  }
}
