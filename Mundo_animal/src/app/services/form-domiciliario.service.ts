import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormDomiciliario } from '../interfaces/form-domiciliario';
@Injectable({
  providedIn: 'root'
})
export class FormDomiciliarioService {

  private apiUrl = 'http://localhost:3000/api/formdomiciliario';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  getDomiciliarios(): Observable<FormDomiciliario[]> {
    return this.http.get<FormDomiciliario[]>(this.apiUrl);
  }

  getDomiciliario(id: number): Observable<FormDomiciliario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<FormDomiciliario>(url);
  }
  addDomiciliario(formData: FormData): Observable<FormDomiciliario> {
    return this.http.post<FormDomiciliario>(`${this.apiUrl}`, formData);
  }


  deleteDomiciliario(id: number): Observable<FormDomiciliario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<FormDomiciliario>(url, this.httpOptions);
  }
}
