import { Component, Input, OnChanges } from '@angular/core';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css']
})
export class CommentDisplayComponent implements OnChanges {
  @Input() comments: any[];
  @Input() isProfileView: boolean;
  @Input() showDelete: boolean;
  constructor(private auth: AuthService) {}

  ngOnChanges() {
    console.log(this.comments);
  }
}
