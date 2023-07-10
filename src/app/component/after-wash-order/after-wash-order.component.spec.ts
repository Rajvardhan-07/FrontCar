import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterWashOrderComponent } from './after-wash-order.component';

describe('AfterWashOrderComponent', () => {
  let component: AfterWashOrderComponent;
  let fixture: ComponentFixture<AfterWashOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterWashOrderComponent]
    });
    fixture = TestBed.createComponent(AfterWashOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
