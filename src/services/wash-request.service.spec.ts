import { TestBed } from '@angular/core/testing';

import { WashRequestService } from './wash-request.service';

describe('WashRequestService', () => {
  let service: WashRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
