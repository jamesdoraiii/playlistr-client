// import { Apollo } from 'apollo-angular';
import { Apollo } from 'apollo-angular';
import { CreateUserRequest } from '@models/create-user-request';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import bcrypt from 'bcrypt';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private apollo: Apollo) {}

  createUser(createUserRequest: CreateUserRequest): any {
    // return this.apollo.mutate({
    //   mutation: gql`
    // {
    //   __typename
    //   createUser(input: {user: {email: "${createUserRequest.email}", passwordHash: "${createUserRequest.password}", spotifyUserId: "${createUserRequest.spotify_user_id}", userId: 10, username: "${createUserRequest.username}"}})
    // }
    // `
    // });
  }
}
