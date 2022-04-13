import { Component, OnInit } from '@angular/core';
import {Book} from "../common/types/Book";
import {BookService} from "../book.service";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent{

  public book: Book = {id: undefined, name: "", authorName: ""};

  constructor(public bookService: BookService) { }

  addBook(){
    this.bookService.addBook(this.book);
    this.book = {id: undefined, name: "", authorName: ""}
  }

}
