import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  numberOfProductsListed:Number | undefined;
  products:any;
  addToCartProducts= [] as any;
  @Input() keyword:any;
  @Input() sortBy:any;
  @Output() numberOfProductsListedEmitter = new EventEmitter<any>();
  @Output() productEmitter = new EventEmitter<any>();
  items:any;
  allProducts: any;

  constructor(public productService:ProductService, private toggleService:ToggleService,private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
        this.allProducts=res;
    });
    this.toggleService.toggleAddToCart$.subscribe( id => {
      if(id)
      {
        console.log(id);

        this.addToCart(id);
      }
    })
    // getting Cart Products Data From Local Storage
    if(this.cartService.getCart()){
      this.addToCartProducts=this.cartService.getCart();
      console.log(this.addToCartProducts, " asssssdd");
    }
  }
  ngDoCheck(){
    this.refresh();
  }

  refresh(){
    this.products = [];

    // console.log("test ",this.sortBy);

    this.allProducts.forEach(
      (item:any) => {
        // ==== Latest Product Price ====
        if(item.productDiscountAvailability == true){
          item.realTimePrice=item.productDiscountPrice;
        }else{
          item.realTimePrice=item.productPrice
        }
        // ==== Search ====
        item.productName=item.productName.toLowerCase();
        if(item.productName.includes(this.keyword.toLowerCase()) ) {
          this.products.push(item)
        }
      }
      )
      this.sort()
    this.numberOfProductsListed=this.products.length;
    this.productEmitter.emit(this.products);
    this.numberOfProductsListedEmitter.emit(this.numberOfProductsListed);
  }
  sort() {
    switch (this.sortBy) {
      case "priceLowToHigh":
        {
          this.products = this.products.sort((low:any, high:any) => low.realTimePrice - high.realTimePrice);
          console.log("working");
          break;
        }
      case "priceHighToLow":
        {
          this.products = this.products.sort((low:any, high:any) => high.realTimePrice - low.realTimePrice);
          break;
        }
      case "latest":
        {
        this.products = this.products.sort((low:any, high:any) => high.id - low.id);
        break;
        }
      case "a to z":
        {
          this.products = this.products.sort(function (low:any, high:any) {
            if (low.productName < high.productName) {
              return -1;
            }
            else if (low.productName > high.productName) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }
      default: {
        this.products = this.products.sort((low:any, high:any) => high.id - high.id);
        break;
      }
    }
    return this.products;
  }

  addToCart(id:any){
    // debugger
    let count=0;
    let temp:any;
    this.allProducts.forEach((product:any) => {
      if(product.id==id){
        temp=product
      }
    });
    // ==== quantity++ while clicking multiple times on add to cart ====
    this.addToCartProducts.forEach((element: any) => {
      // console.log(element," aas");
      if(element.id==this.products[id-1].id){
        element.quantity=1+element.quantity;
        count=1;
      }})
      // ================================================
        if(count==0){
          temp['quantity']=1;
          this.addToCartProducts.push(temp)
        }
        this.cartService.addToCart(this.addToCartProducts);
        // console.log(this.addToCartProducts);
        // this.cartService.addToCart(this.products[id-1]);

      }

}

