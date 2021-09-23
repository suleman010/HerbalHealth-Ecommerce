import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product:any;
  constructor(private toggleService:ToggleService) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  addToCart(){
      this.toggleService.sendToggleAddToCart(this.product.id);
 }

}
