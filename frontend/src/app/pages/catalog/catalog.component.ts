import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products : Product[] = [
    {productId: 1,
      productName: "Faber-Castell Jumbo Grip Silber",
      productStock: 3,
      productDescription: "This is the best pencil ever. Grip wunderful. Much Wow. Such amazing",
      productImage: "../assets/images/pencil.png",
      price: 2.99,
      reviewID: []},

    {productId: 2,
      productName: "Faber-Castell Jumbo Grip Gold",
      productStock: 3,
      productDescription: "This is the best pencil ever. Grip wunderful. Much Wow. Such amazing",
      productImage: "../assets/images/pencil.png",
      price: 2.99,
      reviewID: []},

    {productId: 3,
      productName: "Faber-Castell Jumbo Grip Blue",
      productStock: 3,
      productDescription: "This is the best pencil ever. Grip wunderful. Much Wow. Such amazing",
      productImage: "../assets/images/pencil.png",
      price: 2.99,
      reviewID: []},

    {productId: 4,
      productName: "Faber-Castell Jumbo Grip Blue",
      productStock: 3,
      productDescription: "This is the best pencil ever. Grip wunderful. Much Wow. Such amazing",
      productImage: "../assets/images/pencil.png",
      price: 2.99,
      reviewID: []}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
