import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistRowComponent } from './playlist-row.component';

describe('PlaylistRowComponent', () => {
  let component: PlaylistRowComponent;
  let fixture: ComponentFixture<PlaylistRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
