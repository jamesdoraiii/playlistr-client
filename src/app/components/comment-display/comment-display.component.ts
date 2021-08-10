import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css']
})
export class CommentDisplayComponent implements OnInit {
  @Input() comments: any[];

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    console.log(this.comments);
  }

  isOwner(comment: any): boolean {
    if (comment.userByOwnerId.userId == this.auth.userInfo.userId) {
      return true;
    }
    return false;
  }

  deleteComment() {
    alert('Deleting comment');
  }
}
