import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService, User} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = {login: "", password: ""};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl('/search');
  }

  login(){
    if(this.loginService.checkUser(this.user)){

    }

  }

}
