import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(protected http: HttpClient, private base: BaseService) {
    this.base.$access_token_received.subscribe(result => {});
  }

  search(queryString: string, searchTypeString: string) {
    return this.base.requestWithToken(`https://api.spotify.com/v1/search?q=` + queryString + searchTypeString);
  }
}
