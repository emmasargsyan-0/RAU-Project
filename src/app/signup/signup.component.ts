import { Component, OnInit } from '@angular/core';
import {User} from "../common/types/User";
import {LoginService} from "../login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {relative} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public user: User = {login: "", password: ""};
  public errorMessage = "Something is invalid";
  public hasError = false;

  constructor(   private loginService: LoginService,
                 private router: Router,
                 private route: ActivatedRoute
  ) { }

  register(){
    this.hasError = false;
    if(this.loginService.createUser(this.user)){
      this.router.navigate(['../login'], {relativeTo: this.route});
    }
    this.hasError = true;
  }

}
