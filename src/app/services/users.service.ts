// import { Apollo } from 'apollo-angular';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private apollo: Apollo) {}

  createUser(createUserRequest: { email: string; password: string; spotifyUserId: string }): any {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateUser {
          createUser(
            input: {
              user: { email: "${createUserRequest.email}", passwordHash: "${createUserRequest.password}", spotifyUserId: "${createUserRequest.spotifyUserId}" }
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
}
