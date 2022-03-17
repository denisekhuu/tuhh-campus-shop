// Robin
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl = "http://localhost:8000/register/";

  constructor(private http: HttpClient) {}

  register(model: any) {
    return this.http.post(this.registerUrl, model).pipe(
    )
  }

}
