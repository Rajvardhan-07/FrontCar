import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInvoiceComponent } from './order-invoice.component';

describe('OrderInvoiceComponent', () => {
  let component: OrderInvoiceComponent;
  let fixture: ComponentFixture<OrderInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderInvoiceComponent]
    });
    fixture = TestBed.createComponent(OrderInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
