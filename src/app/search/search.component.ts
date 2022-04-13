import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";
import {Book} from "../common/types/Book";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private allBooks: Book[] = [];
  private books: Book[] = [];
  private searchToken = "";

  constructor(private bookService: BookService ) { }

  ngOnInit(): void {

    this.bookService.getBooks().then((param) => {
      this.books = param;
      this.allBooks = [...this.books];
    }, ()=>{});
  }

  // ngOnInit(): void {
  //   this.bookService.getBooks().then((books) =>{
  //     this.books = books;
  //     this.allBooks = [...this.books];
  //   });
  // }

  search(){
    if(!this.searchToken){
      this.books  = [...this.allBooks];
      return
    }
    this.books  = this.allBooks.filter(book => book.name.indexOf(this.searchToken) > -1
      || book.authorName.indexOf(this.searchToken) > -1);
  }

}
