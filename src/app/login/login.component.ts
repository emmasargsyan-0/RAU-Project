import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../login.service";
import {User} from "../common/types/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User = {login: "", password: ""};
  public errorMessage = "Something is invalid";
  public hasError = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService) { }

  login(){
    this.hasError = false;
    if(this.loginService.checkUser(this.user)){
      localStorage.setItem("login", this.user.login);
      this.router.navigate(['../search'], {relativeTo: this.route});
    }
    this.hasError = true;
  }

}
