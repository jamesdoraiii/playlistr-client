// import { Apollo } from 'apollo-angular';
import { Apollo } from 'apollo-angular';
import { CreateUserRequest } from '@models/create-user-request';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { create } from 'domain';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private apollo: Apollo) {}
}
