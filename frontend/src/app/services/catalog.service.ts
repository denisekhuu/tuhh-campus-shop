import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin} from 'rxjs';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private apiUrl = 'http://localhost:8000/catalog/filter/?format=json'

  constructor(private http: HttpClient, private router: Router) {}

  //Denise
  getProduct(id : Number, params? : HttpParams): Observable<Product> {
    let productUrl = 'http://localhost:8000/catalog/' + id + '?format=json'
    return this.http.get<Product>(productUrl, {params:params});
  }
  
  getProducts(params? : HttpParams): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, {params:params});
  }

  //Denise
  getFilteredProducts(priceParamList: any[], categoryParamList: any[], paramList: any): Observable<Product[]> {
    let reqArray:Observable<any>[] = [];
    if (priceParamList.length == 0 && categoryParamList.length == 0){
      return this.getProducts();
    }
    else{
      if (priceParamList.length > 0 && categoryParamList.length > 0){
        for(let category of categoryParamList){
          for(let price of priceParamList){
            let params = new HttpParams().set('product_price__lte',price['product_price__lte']).set('product_price__gte',price['product_price__gte']).set('product_specification__contains',category['product_specification__contains']);
            reqArray.push(this.http.get<Product[]>(this.apiUrl, {params: params}));
          }
        }
      } else if(priceParamList.length > 0){
        for(let price of priceParamList){
          let params = new HttpParams().set('product_price__lte', price['product_price__lte']).set('product_price__gte', price['product_price__gte']);
          reqArray.push(this.http.get<Product[]>(this.apiUrl, {params: params}));
        }
      } else {
        for(let category of categoryParamList){
            let params = new HttpParams().set('product_specification__contains', category['product_specification__contains'])
            reqArray.push(this.http.get<Product[]>(this.apiUrl, {params}));
        }
      }
      return forkJoin(reqArray).pipe(map(results => results.reduce((all, itm) => all.concat(itm), [])));
    }
  }
  
  //Denise
  getSearchedProducts(searchWord: string){
    let params = new HttpParams().set('search', searchWord)
    return this.getProducts(params);
    
  }
}
