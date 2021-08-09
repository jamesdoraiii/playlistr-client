import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '@services/search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchInputText: string;
  searchInputUpdate = new Subject<string>();
  @Output() openMenu = new EventEmitter<any>();

  constructor(private location: Location, private router: Router, private searchService: SearchService) {
    this.searchInputUpdate.pipe(debounceTime(400), distinctUntilChanged()).subscribe(value => {
      this.search();
    });
  }

  ngOnInit(): void {}

  forward() {
    this.location.forward();
  }

  back() {
    this.location.back();
  }

  searchKeyUp() {
    if (this.location.path() != '/search') {
      this.router.navigate(['/search']);
    }
  }

  search() {
    this.searchService.search(this.searchInputText, '&type=artist,playlist,track,album').subscribe(response => {
      console.log(response);
    });
  }
}
