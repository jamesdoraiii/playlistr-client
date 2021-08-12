import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserProfileService } from '@services/user-profile.service';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

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

  constructor(private route: ActivatedRoute, private router: Router, private profileService: UserProfileService) {}

  get spotifyUserId(): string {
    return this.route.snapshot.paramMap.get('username');
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchUserDetails();
    });
  }

  fetchUserDetails() {
    this.profileService.getPlaylistrUserDetails(this.spotifyUserId).subscribe((response: any) => {
      console.log('this is the response from the user profile lookup page', response);
      const data = response.data.allUsers.nodes[0];
      this.commentsByOwnerId = data.commentsByOwnerId.nodes;
      this.playlistsByOwnerId = data.playlistsByOwnerId.nodes;
      this.likedPlaylistsByOwnerId = this.formatLikesIntoListOfPlaylists(data.likedPlaylists.nodes);
      this.profileFound = true;
      console.log('check it', this.likesByOwnerId);
    });
  }

  formatLikesIntoListOfPlaylists(likes: any) {
    return likes.map(like => like.playlistByParentPlaylistId);
  }
}
