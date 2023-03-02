import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/api/register';
  constructor(private http: HttpClient) { }
  
  signIn(client: Client): Observable<any> {
    return this.http.post(`${this.apiUrl}`, client);
  }
}
