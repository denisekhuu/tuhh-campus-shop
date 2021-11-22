import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import {Product} from "../../models/product"

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getProduct().subscribe((product) => this.products = product);
  }

}
