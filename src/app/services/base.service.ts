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
  public refresh_token: string;
  public $access_token_received: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(protected http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.retreiveTokensFromStorage();

    router.events.subscribe(val => {
      this.getTokensFromRouteParams();
    });
  }

  retreiveTokensFromStorage() {
    const storedAccessToken = localStorage.getItem('access_token');
    if (storedAccessToken) {
      this.access_token = storedAccessToken;
      this.$access_token_received.next(storedAccessToken);
    }
    const storedRefreshToken = localStorage.getItem('refresh_token');
    if (storedRefreshToken) {
      this.refresh_token = storedRefreshToken;
    }
  }

  getTokensFromRouteParams() {
    this.route.queryParams.subscribe(params => {
      const paramAccessToken = params['access_token'];
      const paramRefreshToken = params['refresh_token'];

      if (paramAccessToken && paramAccessToken != this.access_token) {
        this.access_token = paramAccessToken;
        localStorage.setItem('access_token', paramAccessToken);
        this.$access_token_received.next(paramAccessToken);
      }
      if (paramRefreshToken && paramRefreshToken != this.access_token) {
        this.access_token = paramRefreshToken;
        localStorage.setItem('refresh_token', paramRefreshToken);
        this.$access_token_received.next(paramRefreshToken);
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
    this.http
      .post(environment.spotifyServerBaseUrl + 'refresh_token', { refresh_key: this.refresh_token })
      .subscribe((response: any) => {
        this.access_token = response.access_token;
        localStorage.setItem('access_token', response.access_token);
        this.$access_token_received.next(response.access_token);
      });
  }
}
