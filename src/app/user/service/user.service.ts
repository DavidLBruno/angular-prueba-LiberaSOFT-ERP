import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  baseUrl: '';
  constructor(private http: HttpClient) {}

  userRegister(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.baseUrl, user);
  }
}
