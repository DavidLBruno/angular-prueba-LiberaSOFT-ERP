import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/model/country';

@Injectable({
  providedIn: 'root',
})
export class cityServices {
  baseUrl: '';

  constructor(private http: HttpClient) {}

  createCity(city: Country): Observable<any> {
    console.log(city);
    return this.http.post(this.baseUrl, city);
  }
}
