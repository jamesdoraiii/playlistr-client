import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlaylistComponent } from './post-playlist.component';

describe('PostPlaylistComponent', () => {
  let component: PostPlaylistComponent;
  let fixture: ComponentFixture<PostPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
