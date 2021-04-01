import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StringLiteral } from 'typescript';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  access_token: string;

  constructor(private http: HttpClient) {}

  requestWithToken(endpoint: string) {
    console.log('about to make request with token', this.access_token);
    return this.http.post(
      environment.spotifyServerBaseUrl,
      {
        endpoint
      },
      { headers: { Authorization: 'Bearer ' + this.access_token } }
    );
  }
}
