import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURl = environment.API_URL;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  constructor(private http:HttpClient) { }


  getProducts():Observable<any>{
    return this.http.get(`${this.baseURl}/products`);
  }

  checkRealTimePrice(allProducts:[]){
    allProducts.forEach(
      (item:any) => {
        // ==== Latest Product Price ====
        if(item.productDiscountAvailability == true){
          item.realTimePrice=item.productDiscountPrice;
        }else{
          item.realTimePrice=item.productPrice
        }

      })}



  // ==== Component Interaction ====
  // ==== Product-List & Side-Bar ====
  changeMessage(message: string) {
    this.messageSource.next(message)
  }


}
