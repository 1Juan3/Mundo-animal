import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Record } from '../interfaces/record';
@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private apiUrl = 'http://localhost:3000/api/records';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl);
  }

  getRecord(id: number): Observable<Record> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Record>(url);
  }
  addRecord(formData: FormData): Observable<Record> {
    return this.http.post<Record>(`${this.apiUrl}`, formData);
  }


  deleteRecord(id: number): Observable<Record> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Record>(url, this.httpOptions);
  }
}