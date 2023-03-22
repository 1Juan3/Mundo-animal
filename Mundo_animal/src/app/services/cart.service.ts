import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrlSend = 'http://localhost:3000/api/sendRemision';
  private apiUrlGet = 'http://localhost:3000/api/getRemisiones';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http : HttpClient) { }

  sendRemision(item: Cart): Observable<any> {
    return this.http.post(`${this.apiUrlSend}`, item, this.httpOptions);
  }
  getRemisiones(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrlGet);
  }
  
  



}


