import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import {map,tap} from 'rxjs/operators'
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total:number=0;
  shipping:number=3;
  getCartProducts: any= [];
  cart: any= [];
  constructor(private cartService:CartService, private productService:ProductService,private toggleService:ToggleService) { }

  ngOnInit(): void {
    this.getCartProducts =this.cartService.getCart()
    console.log(this.getCartProducts,"get cart products");
    this.totalAmount()

  //   this.productService.getProducts()
  //   .pipe(
  //     map(products=>products.map((pro:any)=>new ProductFilterPrice(pro.id,pro.productName,pro.productPrice,pro.productDiscountPrice)
  //     )))
  //   .subscribe(res=>{
  //     this.getCartProducts.forEach((compare:any,i:number) => {
  //       this.getCartProducts.forEach((compare2:any,i2:number) => {
  //         if(compare2.id==res[i2].id){
  //           this.cart.push(compare)
  //     }
  //       })
  //     })
  //   })
  }

  deleteItemFromCart(productId:number){
    this.getCartProducts.splice(productId, 1);
    this.cartService.addToCart(this.getCartProducts)
    this.totalAmount()
  }

  productQuantityChange(productId:number,type:any){
    if(type=="plus"){
      this.getCartProducts[productId].quantity++
    }
    else if(type=="minus"){
      this.getCartProducts[productId].quantity--
    }
    console.log(this.getCartProducts[productId].quantity,"product quantity change");
    // this.getCartProducts.splice(productId, 1);
    this.cartService.addToCart(this.getCartProducts)
    this.totalAmount();
  }

  totalAmount(){
    this.total=0
    this.getCartProducts.forEach((product:any) => {
      this.total=this.total + (product.realTimePrice * product.quantity)
    });
    console.log(this.total," totaal");
  }

  // totalAmount(){
  //   this.total=0
  //   this.getCartProducts.forEach((product:any) => {
  //     if(product.realTimePrice){
  //       this.total=this.total + (product.realTimePrice * product.quantity)
  //     }else{
  //       this.total=this.total + (product.productPrice * product.quantity)

  //     }
  //   });
  //   console.log(this.total," total amount");
  // }

  proceedToCheckout(){
    let order:any={products:this.getCartProducts,totalAmount:this.total,shipping:this.shipping};
    this.cartService.checkout(order);
  }
}

export class ProductFilterPrice{
  id:Number;
  realTimePrice:Number;
  name:String
  constructor(id:Number,name:String,price:Number,discountPrice:Number){
    this.id = id
    this.name=name
    if(discountPrice){
      this.realTimePrice=discountPrice
    }else{
      this.realTimePrice=price
    }
  }
}
