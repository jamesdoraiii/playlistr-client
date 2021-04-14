import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public access_token: string;
  public $access_token_received: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(protected http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.retreiveAccessTokenFromStorage();

    router.events.subscribe(val => {
      this.getTokenFromRouteParams();
    });
  }

  retreiveAccessTokenFromStorage() {
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      this.access_token = storedToken;
      this.$access_token_received.next(storedToken);
    }
  }

  getTokenFromRouteParams() {
    this.route.queryParams.subscribe(params => {
      const paramToken = params['access_token'];
      if (paramToken && paramToken != this.access_token) {
        this.access_token = paramToken;
        localStorage.setItem('access_token', paramToken);
        this.$access_token_received.next(paramToken);
      }
    });
  }

  requestWithToken(endpoint: string) {
    return this.http.get(endpoint, { headers: { Authorization: 'Bearer ' + this.access_token } }).pipe(
      catchError(err => {
        if (err.status == 401) {
          this.refreshTokens();
        }
        return err;
      })
    );
  }

  refreshTokens() {
    console.log('refreshing the tokens');
    window.location.href = environment.spotifyServerBaseUrl + 'refresh_token';
    // this.http.get(environment.spotifyServerBaseUrl + 'refresh_token').subscribe(response => console.log(response));
  }
}
