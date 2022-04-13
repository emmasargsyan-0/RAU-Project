import { Injectable } from '@angular/core';
import {Book} from "./common/types/Book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private books: Book[] = [];

  public addBook(book: Book){
   // this.books.push(book);
    this.http.post("http://localhost:5001/book", book).toPromise();
  }

  public getBooks(): Promise<Book[]>{
 //   return this.books;
    return this.http.get<Book[]>("http://localhost:5001/books").toPromise();
  }

}
