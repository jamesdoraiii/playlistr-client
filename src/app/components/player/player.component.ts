import { Component, OnInit } from '@angular/core';

import { WebPlayerService } from '@services/web-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  constructor(private webPlayerService: WebPlayerService) {}

  ngOnInit(): void {}

  getPlayerState() {
    this.webPlayerService.getCurrentState();
  }

  getVolume() {}
}
