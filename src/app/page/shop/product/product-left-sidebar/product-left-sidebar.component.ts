import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-left-sidebar',
  templateUrl: './product-left-sidebar.component.html',
  styleUrls: ['./product-left-sidebar.component.css']
})
export class ProductLeftSidebarComponent implements OnInit {


  @Output() emitter = new EventEmitter<any>();
  message:any;
  subscription: Subscription = new Subscription;
  products:any;
  constructor(public productService:ProductService) { }

  searchFeild: any = {};
  ngOnInit(): void {
    this.productService.getProducts().subscribe(res =>{
      this.products=res;
    });
  }

  searchFormSubmit(keyword:any){
      this.emitter.emit(keyword);
  }
}
