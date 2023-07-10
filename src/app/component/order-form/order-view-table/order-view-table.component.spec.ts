import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderViewTableComponent } from './order-view-table.component';

describe('OrderViewTableComponent', () => {
  let component: OrderViewTableComponent;
  let fixture: ComponentFixture<OrderViewTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderViewTableComponent]
    });
    fixture = TestBed.createComponent(OrderViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
