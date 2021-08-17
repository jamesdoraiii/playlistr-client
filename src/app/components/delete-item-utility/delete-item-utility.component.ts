import { Component, Input, OnInit } from '@angular/core';

import { CommentsService } from '@services/comments.service';
import { PlaylistsService } from '@services/playlists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-item-utility',
  templateUrl: './delete-item-utility.component.html',
  styleUrls: ['./delete-item-utility.component.css']
})
export class DeleteItemUtilityComponent implements OnInit {
  @Input() itemType: string;
  @Input() itemId: string;
  isModalOpen: boolean;

  constructor(
    private router: Router,
    private playlistService: PlaylistsService,
    private commentService: CommentsService
  ) {}

  ngOnInit(): void {}

  deleteItem() {
    if (this.itemType == 'playlist') {
      this.deletePlaylist();
    }

    if (this.itemType == 'comment') {
      this.deleteComment();
    }
  }

  deletePlaylist() {
    this.playlistService.deletePlaylistByPlaylistID(this.itemId).subscribe(response => {
      alert('item deleted!');
      this.router.navigate(['/home']);
    });
  }

  deleteComment() {
    this.commentService.deleteComment(this.itemId).subscribe(response => {
      alert('item deleted!');
      this.router.navigate(['/home']);
    });
  }
}
