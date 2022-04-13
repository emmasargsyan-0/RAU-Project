import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddbookComponent} from "./addbook/addbook.component";
import {SearchComponent} from "./search/search.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginGuard} from "./login.guard";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "search", component: SearchComponent, canActivate: [LoginGuard]},
  {path: "add", component: AddbookComponent, canActivate: [LoginGuard]},
  {path: "", redirectTo: '/login', pathMatch: 'full'},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
