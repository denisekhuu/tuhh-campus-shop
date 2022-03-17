import { Component, OnInit, Input} from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from "../../models/product";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

//Denise
export class ProductComponent implements OnInit {

  public product: Product;
  constructor(private catalogService: CatalogService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.catalogService.getProduct(id).subscribe((product) => {
      this.product = product
    })
  }
}
