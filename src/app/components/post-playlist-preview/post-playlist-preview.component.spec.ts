import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlaylistPreviewComponent } from './post-playlist-preview.component';

describe('PostPlaylistPreviewComponent', () => {
  let component: PostPlaylistPreviewComponent;
  let fixture: ComponentFixture<PostPlaylistPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPlaylistPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlaylistPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
