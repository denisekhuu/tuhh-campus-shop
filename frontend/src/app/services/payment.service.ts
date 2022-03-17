import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "./auth.service";
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  getOverallPrice(): Observable<any> {
    const body = {"token": this.authService.loggedIn()};
    let productUrl = 'http://localhost:8000/shopping_cart/price/'
    return this.http.post<any>(productUrl, body, {});
  }

}
