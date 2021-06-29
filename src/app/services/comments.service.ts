import { Apollo } from 'apollo-angular';
import { AuthService } from '@services/auth.service';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private apollo: Apollo, private auth: AuthService) {}

  getCommentsForPlaylist(playlistId: number) {
    return this.apollo.query({
      query: gql`
        query GetCommentsForPlaylist {
          allComments(condition: { parentPlaylistId: ${playlistId} }) {
            nodes {
              content
              createdAt
              commentId
              userByOwnerId {
                email
                userId
                spotifyUserId
              }
            }
          }
        }
      `
    });
  }

  postCommentToPlaylist(playlistId: number, content: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateCommentForPlaylist {
          createComment(input: { comment: { ownerId: 10, parentPlaylistId: ${playlistId}, content: "${content}" } }) {
            clientMutationId
          }
        }
      `
    });
  }

  postCommentToComment(commentId: number, content: string) {
    return this.apollo.mutate({
      mutation: gql`
      mutation CreateChildComment {
        createComment(input: {comment: {ownerId: 10, content: "${content}", parentCommentId: ${commentId}}}) {
          clientMutationId
        }
      }
      `
    });
  }
}
