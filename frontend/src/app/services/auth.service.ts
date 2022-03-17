// Robin
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = "http://localhost:8000/login/";

  constructor(private http: HttpClient) {}
  login(model: any) {
    return this.http.post(this.authUrl  , model).pipe(
      map((response:any) => {
        const user = response;
        localStorage.setItem('token', user.Token);
      })
    )
  }
  loggedIn(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
  }

}
