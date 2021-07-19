import { Apollo } from 'apollo-angular';
import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //POSSIBLY RENAME THIS SERVICE TO 'USER SERVICE'???

  constructor(private apollo: Apollo, private http: HttpClient, private base: BaseService) {}

  signUp(signUpInfo: { email: string; password: string }) {
    return this.http.post(environment.spotifyServerBaseUrl + 'sign-up', signUpInfo);
  }

  updateUserWithSpotifyUsername(userId: number, spotifyUsername: string) {
    return this.apollo.mutate({
      mutation: gql`mutation UpdateUserSpotifyUserIdByUserId {
        updateUserByUserId(input: {userPatch: {spotifyUserId: "${spotifyUsername}"}, userId: ${userId}}) {
          user {
            email
            spotifyUserId
            userId
            createdAt
          }
        }
      }
      `
    });
  }

  getUserProfileFromSpotify() {
    return this.base.requestWithToken(`https://api.spotify.com/v1/me`);
  }

  signIn(signInInfo: { email: string; password: string }) {
    return this.http.post(environment.spotifyServerBaseUrl + 'sign-in', signInInfo);
  }
}
