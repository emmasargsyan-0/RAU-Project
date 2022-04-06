import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddbookComponent} from "./addbook/addbook.component";
import {SearchComponent} from "./search/search.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent},
  {path: "add", component: AddbookComponent},
  {path: "", redirectTo: '/login', pathMatch: 'full' },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
