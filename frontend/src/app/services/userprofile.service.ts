/** Pascal **/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Userprofile } from '../models/userprofile';
import { map } from 'rxjs/operators';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  id = 1; // TODO: changed by login

  private getUrl = `http://localhost:8000/profile/?format=json`
  private postUrl = `http://localhost:8000/profile/update/?format=json`

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserData(): any | null {
    if(this.authService.loggedIn()) {
      return this.http.post(this.getUrl, {"token": this.authService.loggedIn()})
    }
    return null;
  }

  sendUserData(model: Userprofile) {
    model.token = this.authService.loggedIn()
    return this.http.post(this.postUrl, model).pipe(
      map((response:any) => {
        return response;
      })
    )
  }
}
