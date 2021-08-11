import { Component, Input, OnChanges } from '@angular/core';

import { VoteService } from '@services/vote.service';

@Component({
  selector: 'app-liking-utility',
  templateUrl: './liking-utility.component.html',
  styleUrls: ['./liking-utility.component.css']
})
export class LikingUtilityComponent implements OnChanges {
  @Input() itemType: string;
  @Input() itemId: string;
  @Input() likeCount: number;
  @Input() userLikeInfo: any;

  constructor(private voteService: VoteService) {}

  get isLiked() {
    if (this.userLikeInfo.length > 0) {
      return true;
    }
    return false;
  }

  ngOnChanges(): void {
    console.log('this is the on init of the liking utility compontnt', this.userLikeInfo);
  }

  likePlaylist() {
    this.voteService.createVote(this.itemId, true).subscribe(response => {
      alert('You have liked the playlist.');
    });
  }

  unlikePlaylist() {
    this.voteService.removeVote(this.userLikeInfo[0].voteId).subscribe(response => {
      alert('You have unliked the playlist.');
    });
  }
}
