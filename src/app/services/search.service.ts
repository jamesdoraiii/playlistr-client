import { catchError, tap } from 'rxjs/operators';

import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  querystring: string;
  searchResults: any;

  constructor(protected http: HttpClient, private base: BaseService) {
    this.base.$access_token_received.subscribe(result => {});
  }

  search(queryString: string, searchTypeString: string) {
    this.querystring = queryString;
    const formattedQueryString = queryString.replace(/ /g, '%20');
    return this.base
      .requestWithToken(`https://api.spotify.com/v1/search?q=` + formattedQueryString + searchTypeString)
      .pipe(
        tap(response => {
          this.searchResults = response;
        })
      );
  }
}
