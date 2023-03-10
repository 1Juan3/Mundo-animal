import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Availability } from '../interfaces/availability';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private apiUrl = 'http://localhost:3000/api/availability';
  constructor(private http: HttpClient) { }

  addAvailability(disponivilidad: Availability): Observable<any> {
    return this.http.post(`${this.apiUrl}`, disponivilidad);
  } 
  getAvailabilitys(): Observable<Availability[]> {
    return this.http.get<Availability[]>(this.apiUrl);
  }
  getAvailability(veterinarianId: number): Observable<Availability> {
    
    return this.http.get<Availability>(this.apiUrl);
  }
}
