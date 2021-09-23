import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLinksComponent } from './component/social-links/social-links.component';
import { ProductListComponent } from './page/shop/product/product-list/product-list.component';
import { ProductLeftSidebarComponent } from './page/shop/product/product-left-sidebar/product-left-sidebar.component';
import { TapToTopComponent } from './component/tap-to-top/tap-to-top.component';
import { ShopComponent } from './page/shop/shop.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { OrderSucessfullComponent } from './page/order-sucessfull/order-sucessfull.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactFormComponent,
    AboutComponent,
    ContactComponent,
    TapToTopComponent,
    ShopComponent,
    ProductLeftSidebarComponent,
    ProductListComponent,
    SocialLinksComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailComponent,
    OrderSucessfullComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
