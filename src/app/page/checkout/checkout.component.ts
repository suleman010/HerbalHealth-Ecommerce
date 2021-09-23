import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order:any
  billingForm: FormGroup | undefined;
  constructor(private fb:FormBuilder,private checkout:CartService) {}
  ngOnInit(): void {
    this.getOrderDetails()
    console.log(this.order);
    this.billingDetails();

  }
  getOrderDetails(){
    this.order=this.checkout.getCheckout()
  }

  billingDetails(){
    this.billingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required]
      })
  }

  placeOrder(billingForm:any){
    if(this.order){
    this.order.userDetail = billingForm.value;
    this.checkout.placeOrder(this.order).subscribe();
    localStorage.clear();
    this.getOrderDetails()
    // console.log(this.order);
    }
  }

}
