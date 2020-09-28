import { Apollo } from 'apollo-angular';
import { CreateUserRequest } from '@models/create-user-request';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { create } from 'domain';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo) {}

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
}
