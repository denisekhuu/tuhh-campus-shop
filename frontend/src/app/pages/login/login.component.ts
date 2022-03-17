//Robin
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from "../../services/auth.service";
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
  }
  onSubmit(f: NgForm){
    f.value.password=Md5.hashStr(f.value.password);
    const loginObserver = {
      next: (x: number) => { console.log('User logged in'); window.location.href = "http://localhost:4200/profile/" },
      error: (err: Error) => console.log('User didnt log in' + err),
    };
    // @ts-ignore
    this.authService.login(f.value).subscribe(loginObserver);
  }
}
