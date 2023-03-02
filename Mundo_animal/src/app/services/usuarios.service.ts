import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/api';
    this.myApiUrl = 'api/create-users/';
  }

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}/create-users`, user);
  }
  login(user: User): Observable<string> {
    return this.http.post<string>(
      `${this.myAppUrl}/login`,
      user
    );
  }
}
