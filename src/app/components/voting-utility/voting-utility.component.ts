import { Component, Input, OnInit } from '@angular/core';

import { VoteService } from '@services/vote.service';
import { isPunctuatorToken } from 'graphql/language/lexer';

@Component({
  selector: 'app-voting-utility',
  templateUrl: './voting-utility.component.html',
  styleUrls: ['./voting-utility.component.css']
})
export class VotingUtilityComponent implements OnInit {
  @Input() itemType: string;
  @Input() itemId: string;
  @Input() voteCount: number;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    console.log('this is the on init of the voting utility compontnt', { voteinfo: this.voteInfo });
  }

  castVote(isUpvote: boolean) {
    this.voteService.createVote(this.itemId, isUpvote).subscribe(response => {});
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
