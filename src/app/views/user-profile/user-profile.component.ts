import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { UserProfileService } from '@services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  spotifyUserDetails: any;
  playlistrUserDetails: any;
  commentsByOwnerId: any;
  playlistsByOwnerId: any;
  likedPlaylistsByOwnerId: any;
  profileFound: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: UserProfileService,
    private auth: AuthService
  ) {}

  get spotifyUserId(): string {
    return this.route.snapshot.paramMap.get('username');
  }

  get isOwner() {
    return this.auth.isOwner(this.spotifyUserId);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchUserDetails();
    });
  }

  fetchUserDetails() {
    this.profileService.getPlaylistrUserDetails(this.spotifyUserId).subscribe((response: any) => {
      const data = response.data.allUsers.nodes[0];
      if (data) {
        this.commentsByOwnerId = data.commentsByOwnerId.nodes;
        this.playlistsByOwnerId = data.playlistsByOwnerId.nodes;
        this.likedPlaylistsByOwnerId = this.formatLikesIntoListOfPlaylists(data.likedPlaylists.nodes);
        this.profileFound = true;
      } else {
        alert(
          'Unable to retrieve information on this user. It is likely that they have not registered with Playlistr.'
        );
        this.router.navigate(['/home']);
      }
    });
  }

  formatLikesIntoListOfPlaylists(likes: any) {
    return likes.map(like => like.playlistByParentPlaylistId);
  }

  deleteComment() {}
}
