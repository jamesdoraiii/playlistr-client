import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() description: string;

  constructor() {}

  ngOnInit() {}
}
