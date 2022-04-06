import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router  ) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl('/add');
  }

}
