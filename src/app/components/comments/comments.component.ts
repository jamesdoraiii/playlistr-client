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

  ngOnInit(): void {}

  postComment(commentContent: string) {
    this.commentsService.postCommentToPlaylist(this.parentId, commentContent).subscribe((res: any) => {
      let newCommentArr = [];
      newCommentArr.push(res.data.createComment.comment);
      this.comments = newCommentArr.concat(this.comments);
    });
  }
}
