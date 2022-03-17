import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getProducts(): Observable<any> {
    const body = {"token": this.authService.loggedIn()};
    let productUrl = 'http://localhost:8000/wishlist/?format=json'
    return this.http.post<any>(productUrl, body, {});
  }

  addProduct(product_id: any): Observable<any>{
    const body = {"token": this.authService.loggedIn(),"product_id": product_id};
    let productUrl = 'http://localhost:8000/wishlist/add/'
    return this.http.post<any>(productUrl, body, {});
  }

  deleteProduct(product_id: any): Observable<any>{
    const body = {"token": this.authService.loggedIn(),"product_id": product_id};
    let productUrl = 'http://localhost:8000/wishlist/delete/'
    return this.http.post<any>(productUrl, body, {});
  }
}
