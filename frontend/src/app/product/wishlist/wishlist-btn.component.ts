import { Component, OnInit } from '@angular/core';
import {WishlistService} from "../../services/wishlist.service";
import {ProductComponent} from "../../pages/product/product.component";

@Component({
  selector: 'app-wishlist-btn',
  templateUrl: './wishlist-btn.component.html',
  styleUrls: ['./wishlist-btn.component.css']
})
export class WishlistBtnComponent implements OnInit {

  constructor(private wishlistService: WishlistService, private productComponent: ProductComponent) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.wishlistService.addProduct(this.productComponent.product.product_id).subscribe()
  }

}
