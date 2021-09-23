import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  keyword = "";
  numberOfProductsListed: any;
  sortBy:any;

  constructor() { }

  ngOnInit(): void {
  }

  sendSearchKeyword(keyword:any){
    this.keyword = keyword;
  }

  getNumberOfProductsListed($event: any) {
    this.numberOfProductsListed = $event;
  }


}
