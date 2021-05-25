import { TestBed } from '@angular/core/testing';

import { SeeAllItemsService } from './see-all-items.service';

describe('SeeAllItemsService', () => {
  let service: SeeAllItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeAllItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
