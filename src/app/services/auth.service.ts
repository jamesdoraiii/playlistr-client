import { Apollo } from 'apollo-angular';
import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //POSSIBLY RENAME THIS SERVICE TO 'USER SERVICE'???
  userInfo: any;

  constructor(private apollo: Apollo, private http: HttpClient, private base: BaseService) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.base.$access_token_received.subscribe(result => {
      this.getUserProfileFromSpotify();
    });
  }

  signUp(signUpInfo: { email: string; password: string }) {
    return this.http.post(environment.spotifyServerBaseUrl + 'sign-up', signUpInfo);
  }

  updateUserWithSpotifyUsername(spotifyUsername: string) {
    return this.apollo
      .mutate({
        mutation: gql`mutation UpdateUserSpotifyUserIdByUserId {
        updateUserByUserId(input: {userPatch: {spotifyUserId: "${spotifyUsername}"}, userId: ${this.userInfo.userId}}) {
          user {
            email
            spotifyUserId
            userId
            createdAt
          }
        }
      }
      `
      })
      .pipe(
        map(res => {
          this.storeUserInfo(res);
          return res;
        })
      );
  }

  getUserProfileFromSpotify() {
    return this.base.requestWithToken(`https://api.spotify.com/v1/me`);
  }

  signIn(signInInfo: { email: string; password: string }) {
    return this.http.post(environment.spotifyServerBaseUrl + 'sign-in', signInInfo).pipe(
      map(res => {
        this.storeUserInfo(res);
        return res;
      })
    );
  }

  storeUserInfo(user: any) {
    this.userInfo = user;
    localStorage.setItem('userInfo', JSON.stringify(user));
  }
}
