import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CatalogService } from '../../services/catalog.service';
import { Product } from "../../models/product";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  @Output() searchEvent: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  searchForm = this.formBuilder.group({search: new FormControl("")});
  search = new FormControl('');
  products: Product[] = [];

  constructor(private formBuilder: FormBuilder, private catalogService: CatalogService,) { }

  ngOnInit(): void {
  }

  onSearch(): void{
    console.log(this.search.value);
    this.catalogService.getSearchedProducts(this.search.value).subscribe((product_lists) => {
      this.products = product_lists;
      this.searchEvent.emit(this.products);
    });
  }
}
