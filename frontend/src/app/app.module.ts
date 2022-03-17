import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxPayPalModule } from 'ngx-paypal';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductCardComponent } from './catalog/product-card/product-card.component';
import { HeaderComponent } from "./header/header.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { UserprofileComponent } from "./pages/userprofile/userprofile.component";
import { FilterComponent } from './catalog/filter/filter.component';
import { FilterItemComponent } from './catalog/filter/filter-item/filter-item.component';
import { SearchComponent } from './catalog/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductComponent } from './pages/product/product.component';
import { ShoppingCartBtnComponent } from './product/shopping-cart/shopping-cart-btn.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutBtnComponent } from './shopping-cart/checkout-btn/checkout-btn.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { PaymentComponent } from './payment/payment.component';
import { WishlistBtnComponent } from './product/wishlist/wishlist-btn.component';

// --- Robin, Pascal, Denise --- //
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ProductCardComponent,
    HeaderComponent,
    CatalogComponent,
    FilterComponent,
    FilterItemComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent,
    ProductComponent,
    ShoppingCartBtnComponent,
    PaymentComponent,
    ShoppingCartComponent,
    CheckoutBtnComponent,
    WishlistComponent,
    WishlistBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
