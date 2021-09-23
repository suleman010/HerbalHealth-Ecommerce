import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  placeOrder(body: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/order`, body, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  addToCart(body: any) {
    localStorage.setItem("products",JSON.stringify(body));
  }
  getCart() {
    let cart:any=localStorage.getItem("products")
    cart=JSON.parse(cart)
    return cart;
  }

  checkout(body: any) {
  localStorage.setItem("checkout",JSON.stringify(body));
  }

  getCheckout() {
    let cart:any=localStorage.getItem("checkout")
    cart=JSON.parse(cart)
    return cart;
  }

}
