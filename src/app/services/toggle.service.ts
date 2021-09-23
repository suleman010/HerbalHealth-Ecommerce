import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private _toggleSource = new Subject<String>();
  toggleAddToCart$ = this._toggleSource.asObservable();
  // private _toggleCheckout = new Subject<String>();
  // toggleCheckout$ = this._toggleCheckout.asObservable();
  constructor() { }

  // ==== add to cart from product card to cart ====
  sendToggleAddToCart(toggleClass : string){
    this._toggleSource.next(toggleClass);
    console.log("at service toggle");

  }
  // ==== cart to checkout ====
  // sendToggleCheckout(toggleClass : string){
  //   this._toggleCheckout.next(toggleClass);
  // }

}
