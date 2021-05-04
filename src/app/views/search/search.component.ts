import { Component, OnInit } from '@angular/core';

import { SearchService } from '@services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  get searchData() {
    return this.searchService.searchResults;
  }

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}
}
