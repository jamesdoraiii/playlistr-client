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
  constructor(
    protected http: HttpClient,
    private base: BaseService,
    private apollo: Apollo,
    private auth: AuthService
  ) {}

  createVote(ownerId: string, parentPlaylistId: string, isUpvote: boolean) {
    return this.apollo.mutate({
      mutation: gql`
        mutation MyMutation {
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

  deleteVote(voteId: string) {
    return this.apollo.mutate({
      mutation: gql`mutation MyMutation {
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
      mutation: gql`mutation MyMutation {
        updateVoteByVoteId(input: {votePatch: {isUpvote: ${isUpvote}}, voteId: ${voteId}}) {
          clientMutationId
        }
      }
      `
    });
  }
}
