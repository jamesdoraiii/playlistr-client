import { TestBed } from '@angular/core/testing';

import { WebPlayerService } from './web-player.service';

describe('WebPlayerService', () => {
  let service: WebPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
