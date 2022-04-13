import { Injectable } from '@angular/core';
import {User} from "./common/types/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private users: User[] = [];

  checkUser(user: User): boolean{
    return this.users.some(u => u.login === user.login && u.password === user.password);
  }

  createUser(user: User): boolean {
    if(user.login &&  user.password) {
      this.users.push(user);
      return true;
    }
    return false;
  }

}
