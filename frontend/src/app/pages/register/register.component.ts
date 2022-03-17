import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { RegisterService } from "../../services/register.service";
import {Md5} from "ts-md5";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) {
  }
  ngOnInit(): void {
  }

  onSubmit(r: NgForm) {
    r.value.password=Md5.hashStr(r.value.password);
    const registerObserver = {
      next: (x: number) => { console.log('User logged in'); window.location.href = "http://localhost:4200/profile/" },
      error: (err: Error) => console.log('User didnt register' + err),
    };
    // @ts-ignore
    this.registerService.register(r.value).subscribe(registerObserver);

  }
}
