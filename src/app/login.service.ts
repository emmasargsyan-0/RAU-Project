import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkUser(user: User): boolean{
    // todo
    return true;
  }

}


export type User = {
    login: string;
    password: string;
}
