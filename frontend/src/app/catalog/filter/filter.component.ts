import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CatalogService } from '../../services/catalog.service';
import { FilterItemInterface, FilterSubItemsInterface, FilterParamListInterface } from "../../interfaces/filter";
import { Product } from "../../models/product";

// -- Denise -- //
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  @Output() filterEvent: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  filterForm = this.formBuilder.group({});

  
  priceFilterList : FilterItemInterface[] = [
    {'id': "price0",'name': "Bis 20€", 'args':[0, 20]},
    {'id': "price1",'name': "Von 20€ Bis 50€", 'args':[20, 50]},
    {'id': "price2",'name': "Von 50€ Bis 100€", 'args':[50, 100]},
    {'id': "price3",'name': "Über 100€", 'args':[100, 10000]}
  ];

  //http://localhost:8000/catalog/?product_specification__contains=school%20supplies

   categoryFilterList : FilterSubItemsInterface[] = [
     {'id': 'school supplies', 'name':'Schulmaterialien', 'args':[], 'subitem':[]},
     {'id': 'other', 'name':'Verschiedenes', 'args':[], 'subitem':[]}
   ];

  products: Product[] = [];


  constructor(private formBuilder: FormBuilder, private catalogService: CatalogService, ) { }

  onFilter(): void {
    let paramList : FilterParamListInterface = {product_price__gte: [], product_price__lte: [], product_specification__contains:[]};
    let prices = this.getPriceParams(paramList);
    let categories = this.getCategoryParams(paramList);

    this.catalogService.getFilteredProducts(prices, categories, paramList).subscribe((product_lists) => {
      this.products = product_lists;
      this.filterEvent.emit(this.products);
    });
  }

  findPriceRange(id:string) : any {
    for(var priceFilter of this.priceFilterList){
      if (priceFilter['id'] == id){
        return priceFilter['args'];
      }
    }
    return null;
  }

  getPriceParams(paramList: FilterParamListInterface) : any[]{
    let params : any[] = [];
    for (let k in this.filterForm.value) {
      if (this.filterForm.get(k)?.value) {
        let args = this.findPriceRange(k);
        if (args) {
          params.push({'product_price__gte': args[0], 'product_price__lte': args[1]});
          paramList['product_price__gte'].push(args[0]);
          paramList['product_price__lte'].push(args[1]);      
        }
      }
    }
    return params
  }

  getCategoryParams(paramList: FilterParamListInterface) : any[] {
    let params : any[] = []
    for (let k in this.filterForm.value) {
      if (this.filterForm.get(k)?.value) {
        for(var categoryFilter of this.categoryFilterList){
          if (categoryFilter['id'] == k){            
            params.push({'product_specification__contains':k});
            paramList['product_specification__contains'].push(k)
          }
        }
      }
    }
    return params;
  }

  ngOnInit(): void {
    this.priceFilterList.forEach(param => {
        this.filterForm.addControl(param['id'], new FormControl(''));
    })
    this.categoryFilterList.forEach(param => {
      this.filterForm.addControl(param['id'], new FormControl(''));
  })
  }

}
