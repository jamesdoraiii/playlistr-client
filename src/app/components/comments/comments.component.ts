import { Component, Input, OnInit } from '@angular/core';

import { CommentsService } from '@services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() parentItemType: string;
  @Input() parentId: number;
  @Input() comments: any[];

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    console.log(this.parentItemType);
    console.log(this.parentItemType);
    console.log(this.comments);
  }

  postComment(commentContent: string) {
    console.log('in post comment of the parent', commentContent);
    this.commentsService
      .postCommentToPlaylist(this.parentId, commentContent)
      .subscribe(res => console.log('comment posted', res));
  }
}
