import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  //Denise
  getProducts(): Observable<any> {
    const body = {"token": this.authService.loggedIn()};
    let productUrl = 'http://localhost:8000/shopping_cart/?format=json'
    return this.http.post<any>(productUrl, body, {});
  }
  //Denise
  getOverallPrice(): Observable<any> {
    const body = {"token": this.authService.loggedIn()};
    let productUrl = 'http://localhost:8000/shopping_cart/price/'
    return this.http.post<any>(productUrl, body, {});
  }
  //Robin
  addProduct(product_id: any): Observable<any>{
    const body = {"token": this.authService.loggedIn(),"product_id": product_id};
    console.log(body)
    let productUrl = 'http://localhost:8000/shopping_cart/add/'
    return this.http.post<any>(productUrl, body, {});
  }
  //Robin
  deleteProduct(product_id: any): Observable<any>{
    const body = {"token": this.authService.loggedIn(),"product_id": product_id};
    let productUrl = 'http://localhost:8000/shopping_cart/delete/'
    return this.http.post<any>(productUrl, body, {});
  }
  //Robin
  checkout(): Observable<any> {
    const body = {"token": this.authService.loggedIn()};
    console.log(body)
    let productUrl = 'http://localhost:8000/payment/'
    this.http.post<any>(productUrl, body, {})
    return this.http.post<any>(productUrl, body, {});
  }
}
