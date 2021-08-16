import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroCards = [
    {
      icon: 'fas fa-plus',
      title: 'Post',
      description:
        'Share your carefully crafted playlists with the community! Other users will be able to listen to, discuss, and like your playlists. Will you be able to get your playlist into the weekly list of top liked playlists?'
    },
    {
      icon: 'fas fa-comment',
      title: 'Discuss',
      description:
        "Use Playlistr's commenting system to join a discussion with fellow music lovers. Discuss music and playlists with like minded people and use feedback to craft the perfect playlist!"
    },
    {
      icon: 'fas fa-volume-up',
      title: 'Listen',
      description:
        "Listen to playlists and discover new music! Discover new music in the genre's you love and share that with your fellow Playlistr users."
    }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  getStarted() {
    this.router.navigate(['/home']);
  }
}
