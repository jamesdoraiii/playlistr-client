import { Apollo } from 'apollo-angular';
import { AuthService } from '@services/auth.service';
import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(
    protected http: HttpClient,
    private base: BaseService,
    private apollo: Apollo,
    private auth: AuthService
  ) {}

  getPlaylistrUserDetails(id: string) {
    return this.apollo.query({
      query: gql`
      query GetPlaylistrUserDetails {
        allUsers(condition: {spotifyUserId: "${id}"}) {
          nodes {
            commentsByOwnerId {
              nodes {
                commentId
                parentPlaylistId
                content
                createdAt
                playlistByParentPlaylistId {
                  spotifyPlaylistId
                }
              }
            }
            playlistsByOwnerId {
              nodes {
                spotifyPlaylistId
                playlistId
                name
                createdAt
                genreTags
                imageUrl
              }
            }
            likedPlaylists: votesByOwnerId {
              nodes {
                parentPlaylistId
                voteId
                playlistByParentPlaylistId {
                  genreTags
                  imageUrl
                  name
                  playlistId
                  spotifyPlaylistId
                }
              }
            }
          }
        }
      }
      `,
      fetchPolicy: 'no-cache'
    });
  }
}
