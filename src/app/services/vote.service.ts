import { Apollo } from 'apollo-angular';
import { AuthService } from '@services/auth.service';
import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  constructor(protected http: HttpClient, private apollo: Apollo, private auth: AuthService) {}

  // The method below is currently not being used
  // It been replaced by expanding the playlist details call, this prevents me from needing to make multiple hits to the gql server to get all playlist information
  getVoteInfoForPlaylistAndUser(parentPlaylistId: string) {
    return this.apollo.query({
      query: gql`
        query GetVoteInfoForPlaylistAndUser {
          playlistByPlaylistId(playlistId: ${parentPlaylistId}) {
            votesByParentPlaylistId(first: 1, condition: {ownerId: ${this.auth.userInfo.userId}}) {
              nodes {
                isUpvote
                ownerId
                parentPlaylistId
                voteId
              }
            }
          }
        }
      `
    });
  }

  createVote(parentPlaylistId: string, isUpvote: boolean) {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateVote {
          createVote(input: { vote: { ownerId: ${this.auth.userInfo.userId}, isUpvote: ${isUpvote}, parentPlaylistId: ${parentPlaylistId} } }) {
            vote {
              nodeId
              createdAt
              isUpvote
              voteId
            }
          }
        }
      `
    });
  }

  removeVote(voteId: string) {
    return this.apollo.mutate({
      mutation: gql`mutation RemoveVote {
        deleteVoteByVoteId(input: {voteId: ${voteId}}) {
          vote {
            voteId
          }
        }
      }`
    });
  }

  updateVote(voteId: string, isUpvote: boolean) {
    return this.apollo.mutate({
      mutation: gql`mutation UpdateVote {
        updateVoteByVoteId(input: {votePatch: {isUpvote: ${isUpvote}}, voteId: ${voteId}}) {
          clientMutationId
        }
      }
      `
    });
  }
}
