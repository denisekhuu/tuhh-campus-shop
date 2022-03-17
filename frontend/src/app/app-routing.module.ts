import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { UserprofileComponent } from "./pages/userprofile/userprofile.component";
import { ProductComponent } from "./pages/product/product.component";
import { ShoppingCartComponent } from "./pages/shopping-cart/shopping-cart.component";
import {WishlistComponent} from "./pages/wishlist/wishlist.component";
import {PaymentComponent} from "./payment/payment.component"
// --- Robin, Pascal, Denise --- //

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'home', component: CatalogComponent  },
  { path: 'aboutus', component:  AboutusComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ProductComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: UserprofileComponent },
  { path: 'checkout', component: PaymentComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

