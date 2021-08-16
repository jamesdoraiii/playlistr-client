import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css']
})
export class WelcomeModalComponent implements OnInit {
  @Input() isVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
