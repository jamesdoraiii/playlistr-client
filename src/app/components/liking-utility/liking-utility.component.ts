import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';

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
  isLiked: boolean;

  constructor(private voteService: VoteService, private cdRef: ChangeDetectorRef) {}

  ngOnChanges(): void {
    this.checkIsLiked();
  }

  checkIsLiked() {
    if (this.userLikeInfo.length > 0) {
      this.isLiked = true;
      return;
    }
    this.isLiked = false;
  }

  likePlaylist() {
    this.voteService.createVote(this.itemId, true).subscribe((response: any) => {
      alert('You have liked the playlist.');
      this.isLiked = true;
      this.likeCount += 1;
      this.userLikeInfo = [response.data.createVote.vote];
    });
  }

  unlikePlaylist() {
    this.voteService.removeVote(this.userLikeInfo[0].voteId).subscribe(response => {
      alert('You have unliked the playlist.');
      this.userLikeInfo = [];
      this.isLiked = false;
      this.likeCount -= 1;
    });
  }
}
