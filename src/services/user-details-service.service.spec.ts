import { TestBed } from '@angular/core/testing';

import { UserDetailsServiceService } from './user-details-service.service';

describe('UserDetailsServiceService', () => {
  let service: UserDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
