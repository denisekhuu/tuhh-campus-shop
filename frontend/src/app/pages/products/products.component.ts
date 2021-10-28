import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: Product[] = [];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProductItems().subscribe(
      (items: any) => this.items = items,
      (error: any) => this.error = error
    );
  }
}
