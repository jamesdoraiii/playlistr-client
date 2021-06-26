import { Apollo } from 'apollo-angular';
import { CreateUserRequest } from '@models/create-user-request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  signUp(signUpInfo: { email: string; password: string; spotifyUsername: string }) {
    return this.http.post(environment.spotifyServerBaseUrl + 'sign-up', signUpInfo);
  }

  signIn(signInInfo: { email: string; password: string }) {
    return this.http.post(environment.spotifyServerBaseUrl + 'sign-in', signInInfo);
  }
}
