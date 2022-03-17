import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// -- Denise -- //
export class HomeComponent implements OnInit {


  products : Product[] = [
    {product_id: 1,
    product_name: "Faber-Castell Jumbo Grip Silber",
    product_stock: 3,
    product_description: "This is the best pencil ever. Grip wunderful. Much Wow. Such amazing",
    picture_path: "../assets/images/pencil.png",
    product_price: 2.99,
    product_reviews: []},

    {product_id: 2,
    product_name: "Faber-Castell Jumbo Grip Gold",
    product_stock: 3,
    product_description: "This is the best pencil ever. Grip wunderful. Much Wow. Such amazing",
    picture_path: "../assets/images/pencil.png",
    product_price: 2.99,
    product_reviews: []},

    {product_id: 3,
    product_name: "Faber-Castell Jumbo Grip Blue",
    product_stock: 3,
    product_description: "This is the best pencil ever. Grip wunderful. Much Wow. Such amazing",
    picture_path: "../assets/images/pencil.png",
    product_price: 2.99,
    product_reviews: []},

    {product_id: 4,
      product_name: "Faber-Castell Jumbo Grip Blue",
      product_stock: 3,
      product_description: "This is the best pencil ever. Grip wunderful. Much Wow. Such amazing",
      picture_path: "../assets/images/pencil.png",
      product_price: 2.99,
      product_reviews: []}
]

  constructor() { }

  ngOnInit(): void {
  }

}
