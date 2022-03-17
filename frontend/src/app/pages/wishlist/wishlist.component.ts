import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { AuthService } from "../../services/auth.service";
import { WishlistService } from "../../services/wishlist.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ProductComponent} from "../product/product.component";


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {

  public wishlistproducts: Product[];
  public price: number;
  public logged_in = this.authService.loggedIn();
  constructor(private wishlistService: WishlistService,  private authService: AuthService, private shoppingcartService: ShoppingCartService) {

  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.wishlistService.getProducts().subscribe((product) => {
      this.wishlistproducts = product;
      console.log(product)
    })
  }
  addProduct(id: any){
    this.shoppingcartService.addProduct(id).subscribe()
  }

  deleteProduct(id: any){
    this.wishlistService.deleteProduct(id).subscribe()
    this.getProduct()
  }


}

