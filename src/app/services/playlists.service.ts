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
export class PlaylistsService {
  userPlaylists: any[];

  constructor(
    protected http: HttpClient,
    private base: BaseService,
    private apollo: Apollo,
    private auth: AuthService
  ) {
    this.base.$access_token_received.subscribe(result => {
      this.getPlaylistsForUser();
    });
  }

  getSpotifyPlaylistInfoById(id: string) {
    return this.http
      .post(environment.spotifyServerBaseUrl, { endpoint: `https://api.spotify.com/v1/playlists/${id}` })
      .pipe(
        map((res: any) => {
          console.log('this is the response in the get spotify playlist info by ID', res);
          if (res.name && res.name != 'Error') {
            return this.formatTracks(res);
          } else {
            throw new Error('No playlist found for the submitted ID.');
          }
        })
      );
  }

  getPlaylistrPlaylistInfoById(id: string) {
    return this.apollo.query({
      query: gql`
      query GetPlaylistDetailFromSpotifyPlaylistId {
        playlistBySpotifyPlaylistId(spotifyPlaylistId: "${id}") {
          createdAt
          playlistId
          genreTags
          name
          ownerUsername
          spotifyPlaylistId
          commentsByParentPlaylistId(orderBy: CREATED_AT_DESC) {
            nodes {
              content
              createdAt
              commentId
              userByOwnerId {
                email
                spotifyUserId
                userId
              }
            }
          }
          userLike: votesByParentPlaylistId(condition: {ownerId: ${this.auth.userInfo.userId}}, first: 1) {
            nodes {
              ownerId
              parentPlaylistId
              isUpvote
              createdAt
              voteId
            }
          }
          likeCount: votesByParentPlaylistId(condition: {isUpvote: true}) {
            totalCount
          }
        }
      }
      `,
      fetchPolicy: 'no-cache'
    });
  }
  // added no-cache policy to the playlist above to prevent users from being able to like over and over, may want to adjust how this works and get the playlist information in a separate query from the likes and the votes, this will allow the playlist to be cached but get likes and votes without caching so that they are always up to date. This will likely be more efficient.

  getPlaylistsForUser() {
    this.base.requestWithToken(`https://api.spotify.com/v1/me/playlists`).subscribe(
      (playlists: any) => {
        this.userPlaylists = playlists.items.map(item => {
          if (item.images && item.images[0]) {
            item.imageUrl = item.images[0].url;
          }
          item.ownerUsername = item.owner.display_name;
          return item;
        });
      },
      err => {
        // if (err.status == 401) {
        //   this.base.refreshTokens();
        // }
      }
    );
  }

  getAllPlaylists() {
    return this.apollo.query({
      query: gql`
        query AllPlaylists {
          allPlaylists {
            nodes {
              spotifyPlaylistId
              playlistId
              ownerUsername
              ownerId
              nodeId
              name
              isValid
              imageUrl
              genreTags
              type
            }
          }
        }
      `
    });
  }

  // going to need a date range and a limit
  getTopVotedPlaylists(period: string, limit: number) {
    return this.apollo.query({
      query: gql`
        query TopVotedPlaylists {
          allPlaylists(orderBy: VOTES_BY_PARENT_PLAYLIST_ID_COUNT_DESC) {
            nodes {
              spotifyPlaylistId
              playlistId
              ownerUsername
              ownerId
              nodeId
              name
              isValid
              imageUrl
              genreTags
              type
              votesByParentPlaylistId {
                totalCount
              }
            }
          }
        }
      `
    });
  }

  getPlaylistsByGenre(tags: string) {
    return this.apollo.query({
      query: gql`
        query PlaylistsByGenreTag {
          allPlaylists(
            orderBy: VOTES_BY_PARENT_PLAYLIST_ID_COUNT_DESC
            filter: { genreTags: { contains: "Progressive House" } }
          ) {
            nodes {
              spotifyPlaylistId
              playlistId
              ownerUsername
              ownerId
              nodeId
              name
              isValid
              imageUrl
              genreTags
              type
              votesByParentPlaylistId {
                totalCount
              }
            }
          }
        }
      `
    });
  }

  postPlaylist(playlistName: string, spotifyPlaylistId: string, genreTags: string[], imageUrl: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreatePlaylist {
          createPlaylist(input: {playlist: {ownerId: ${
            this.auth.userInfo.userId
          }, spotifyPlaylistId: "${spotifyPlaylistId}", genreTags: ${JSON.stringify(
        genreTags
      )}, isValid: false, name: ${playlistName}, ownerUsername: ${
        this.auth.userInfo.spotifyUserId
      }, imageUrl: ${imageUrl}}}) {
            clientMutationId
          }
        }
      `
    });
  }

  formatTracks(playlist: any) {
    playlist.tracks = playlist.tracks.items.map(item => {
      return item.track;
    });

    return playlist;
  }
}
