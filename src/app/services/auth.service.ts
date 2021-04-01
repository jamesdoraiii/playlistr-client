import { Apollo } from 'apollo-angular';
import { CreateUserRequest } from '@models/create-user-request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { create } from 'domain';
import { environment } from '@environment';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  createUser(createUserRequest: CreateUserRequest): any {
    return this.apollo.mutate({
      mutation: gql`
        mutation MyMutation {
          createUser(
            input: {
              user: { email: "${createUserRequest.email}", passwordHash: "${createUserRequest.password}", spotifyUserId: "${createUserRequest.spotify_user_id}", username: "${createUserRequest.username}" }
            }
          ) {
            user {
              email
            }
          }
        }
      `
    });
  }

  updateUser(): any {}

  login() {}

  spotifyLogin() {
    return this.http.get(environment.spotifyServerBaseUrl + 'login');
  }
}
