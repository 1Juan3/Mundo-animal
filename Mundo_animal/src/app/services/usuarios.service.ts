import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/usuario';
import { Vet } from '../interfaces/vet';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl: string;
  private myApiUrlVet: string;
  private myApiUrlVete: string;
  private myApiUrlDomi: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/api';
    this.myApiUrlVet='/register-vets';
    this.myApiUrlVete= '/registervete';
    this.myApiUrlDomi= '/registerdeliverers';

  }

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}/create-users`, user);
  }
  registerVet(vet: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrlVet}`, vet);
  }
  registerVete(vete: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrlVete}`, vete);
  }
  registerDeliver(domi: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrlDomi}`,domi);
  }


  login(user: User): Observable<string> {
    return this.http.post<string>(
      `${this.myAppUrl}/login`,
      user
    );
  }
}
