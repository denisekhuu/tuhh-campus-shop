import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from "../../models/product";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
//Denise
export class ShoppingCartComponent implements OnInit {

  public products: Product[];
  public price: number;
  public logged_in = this.authService.loggedIn();
  constructor(private shoppingCartService: ShoppingCartService,  private authService: AuthService) {

  }

  ngOnInit(): void {
      this.getProduct()
      this.getPrice()
  }

  getProduct() {
    this.shoppingCartService.getProducts().subscribe((product) => {
      this.products = product;
      console.log(product)
    })
  }

  getPrice() {
    this.shoppingCartService.getOverallPrice().subscribe((price) => {
      this.price = Math.round(price * 100) / 100;
    })
  }
  deleteProduct(id: any){
    this.shoppingCartService.deleteProduct(id).subscribe()
    this.getProduct()
  }
  checkout(){
    this.shoppingCartService.checkout().subscribe()
    console.log('Checkout')
  }


}
