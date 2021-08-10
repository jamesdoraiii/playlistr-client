import { Component, Input, OnInit } from '@angular/core';

import { VoteService } from '@services/vote.service';
import { isPunctuatorToken } from 'graphql/language/lexer';

@Component({
  selector: 'app-voting-utility',
  templateUrl: './voting-utility.component.html',
  styleUrls: ['./voting-utility.component.css']
})
export class VotingUtilityComponent implements OnInit {
  @Input() playlistId: string;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {}

  castVote(isUpvote: boolean) {
    this.voteService.createVote(this.playlistId, isUpvote).subscribe(response => {});
  }

  // updateVote() {
  //   this.voteService.updateVote().subscribe(response => {

  //   })
  // }

  // removeVote() {
  //   this.voteService.removeVote().subscribe(response => {

  //   })
  // }
}
