/** Pascal **/

import { Component, OnInit } from '@angular/core';
import { UserprofileService } from "../../services/userprofile.service";
import { NgForm } from '@angular/forms';
import { Userprofile } from '../../models/userprofile';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user_data: Userprofile = {
    token: "",
    user_address: "",
    user_bank_info: "",
    user_email: "",
    user_id: 0,
    user_name: "",
    user_phone_number: "",
  };

  update_message = "";

  constructor(private userprofileService: UserprofileService, private authService: AuthService) { }

  onLogout(f: NgForm) {
    this.authService.logoutUser();
    window.location.href = "http://localhost:4200/";
  }

  ngOnInit(): void {
    // @ts-ignore
    this.userprofileService.getUserData().subscribe((userprofile: any) => this.user_data = userprofile); // TODO: Change any type to Userprofile once backend fixed
  }

  onSubmit(f: NgForm) {
    const updateObserver = {
      next: (x: number) => console.log('Userdata Updated'),
      error: (err: Error) => console.log('Userdata didnt update' + err),
    };
    // @ts-ignore
    this.userprofileService.sendUserData(f.value).subscribe(updateObserver);
    console.log(f.value);
  }

}
