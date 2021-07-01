import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css']
})
export class CommentDisplayComponent implements OnInit {
  @Input() comments: any[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.comments);
  }
}
