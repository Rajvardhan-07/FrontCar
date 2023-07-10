import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledWashCustomerComponent } from './scheduled-wash-customer.component';

describe('ScheduledWashCustomerComponent', () => {
  let component: ScheduledWashCustomerComponent;
  let fixture: ComponentFixture<ScheduledWashCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledWashCustomerComponent]
    });
    fixture = TestBed.createComponent(ScheduledWashCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
