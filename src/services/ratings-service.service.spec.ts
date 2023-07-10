import { TestBed } from '@angular/core/testing';

import { RatingsServiceService } from './ratings-service.service';

describe('RatingsServiceService', () => {
  let service: RatingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
