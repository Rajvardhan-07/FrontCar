import { TestBed } from '@angular/core/testing';

import { OrderCheckService } from './order-check.service';

describe('OrderCheckService', () => {
  let service: OrderCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
