import { Component, OnInit } from '@angular/core';
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

  constructor(private countriesService: CountriesService) {}

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

  ngOnInit(): void {
    this.getAll();
    this.cols = [
      { field: 'ID', header: 'ID' },
      { field: 'CP', header: 'CP' },
      { field: 'CIUDADID', header: 'CIUDAD' },
      { field: 'PROVINCIA', header: 'PROVINCIA' },
    ];
  }
}
