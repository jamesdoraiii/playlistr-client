import { PlaylistsService } from './playlists.service';
import { TestBed } from '@angular/core/testing';

describe('PlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistsService = TestBed.get(PlaylistsService);
    expect(service).toBeTruthy();
  });
});
