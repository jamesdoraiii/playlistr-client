import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment-creator',
  templateUrl: './comment-creator.component.html',
  styleUrls: ['./comment-creator.component.css']
})
export class CommentCreatorComponent implements OnInit {
  commentContent: string;
  @Output() postComment = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  createComment() {
    this.postComment.emit(this.commentContent);
  }
}
