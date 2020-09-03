import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyEmbeddedPlayerComponent } from './spotify-embedded-player.component';

describe('SpotifyEmbeddedPlayerComponent', () => {
  let component: SpotifyEmbeddedPlayerComponent;
  let fixture: ComponentFixture<SpotifyEmbeddedPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyEmbeddedPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyEmbeddedPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
