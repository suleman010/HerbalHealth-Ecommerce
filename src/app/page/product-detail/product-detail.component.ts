import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId:number | undefined
  product:any;
  allProducts: any;
  addToCartProducts= [] as any;
  constructor(private route:ActivatedRoute,private cartService:CartService,private productService:ProductService, private toggleService:ToggleService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.allProducts=res;
  })
  // -----------------------------------------
    if(this.cartService.getCart()){
      this.addToCartProducts=this.cartService.getCart();
      console.log(this.addToCartProducts, " asssssdd");
    }
          // ---------------------------params---------------------------------
          this.route.queryParams.subscribe(parms=>{
            console.log(parms);
            this.productId=parms.productId
          })
          // ----------------------------------
          this.productService.getProducts().subscribe(res=>{
            res.forEach((product:any) => {
              if(product.id == this.productId){
                this.product=product;
              }
            });
          })
          console.log(this.product);

  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  this.productService.checkRealTimePrice(this.allProducts);
  }
  addToCart(id:any){
    // debugger
    let count=0;
    let temp:any
    this.allProducts.forEach((product:any) => {
      if(product.id==id){
        temp=product
      }
    });
    // ==== quantity++ while clicking multiple times on add to cart ====
    this.addToCartProducts.forEach((element: any) => {
      // console.log(element," aas");
      if(element.id==temp.id){
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
