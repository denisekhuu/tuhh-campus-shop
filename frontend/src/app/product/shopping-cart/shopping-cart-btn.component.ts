import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { ShoppingCartService} from "../../services/shopping-cart.service";
import{ ProductComponent } from "../../pages/product/product.component";

@Component({
  selector: 'app-shopping-cart-btn',
  templateUrl: './shopping-cart-btn.component.html',
  styleUrls: ['./shopping-cart-btn.component.css']
})


//Denise
export class ShoppingCartBtnComponent implements OnInit {

  constructor(private shoppingcartService: ShoppingCartService, private productComponent: ProductComponent) {

  }


  ngOnInit(): void {

  }
  addProduct(){
    this.shoppingcartService.addProduct(this.productComponent.product.product_id).subscribe()
  }

}
