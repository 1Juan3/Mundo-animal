import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario } from '../interfaces/formveterinaria'; 
@Injectable({
  providedIn: 'root'
})
export class FormVeterinariaService {

  private apiUrl = 'http://localhost:3000/api/formveterinaria';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getAllForms(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>(this.apiUrl);
  }

  getForm(id: number): Observable<Formulario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Formulario>(url);
  }
  newForm(formulario: Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(`${this.apiUrl}`, formulario);
  }


  deleteForm(id: number): Observable<Formulario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Formulario>(url, this.httpOptions);
  }
}

