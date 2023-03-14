import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api/addtocart';
  private apiUrlGet= 'http://localhost:3000/api/getCart';
  private apiUrlAdd= 'http://localhost:3000/api/addQuantity';
  private apiUrlRes= 'http://localhost:3000/api/resQuantity';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http : HttpClient) { }

  addToCart(cart: Cart): Observable<any> {
    return this.http.post(`${this.apiUrl}`,cart);
  } 
  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrlGet);
  }
  updateAdd(id: number, quantityValue: number): Observable<any> {
    const url = `${this.apiUrlAdd}/${id}`;
    const body = { quantityValue: quantityValue };
    return this.http.put<Cart>(url, body);
  }
  updateRes(id: number, quantityValue: number): Observable<any> {
    const url = `${this.apiUrlRes}/${id}`;
    const body = { quantityValue: quantityValue };
    return this.http.put<Cart>(url, body);
  }

}


