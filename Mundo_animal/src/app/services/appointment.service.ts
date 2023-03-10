import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000/api/appointment';
  constructor(private http : HttpClient) { }

  addAvailability(appointment: Appointment): Observable<any> {
    return this.http.post(`${this.apiUrl}`,appointment);
  } 
}
