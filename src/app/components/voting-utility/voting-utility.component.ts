import { Component, Input, OnInit } from '@angular/core';

import { VoteService } from '@services/vote.service';

@Component({
  selector: 'app-voting-utility',
  templateUrl: './voting-utility.component.html',
  styleUrls: ['./voting-utility.component.css']
})
export class VotingUtilityComponent implements OnInit {
  @Input() itemType: string;
  @Input() itemId: string;
  @Input() voteCount: number;
  @Input() userVoteInfo: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    console.log('this is the on init of the voting utility compontnt', { voteinfo: this.userVoteInfo });
  }

  castVote(isUpvote: boolean) {
    this.voteService.createVote(this.itemId, isUpvote).subscribe(response => {
      alert('vote has been created');
    });
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
