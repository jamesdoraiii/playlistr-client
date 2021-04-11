import { BehaviorSubject, ReplaySubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public access_token: string;
  public $access_token_received: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(protected http: HttpClient) {}

  requestWithToken(endpoint: string) {
    return this.http.get(endpoint, { headers: { Authorization: 'Bearer ' + this.access_token } });
  }

  refreshTokens() {
    console.log('refreshing the tokens');
    window.location.href = environment.spotifyServerBaseUrl + 'refresh_token';
    // this.http.get(environment.spotifyServerBaseUrl + 'refresh_token').subscribe(response => console.log(response));
  }
}
