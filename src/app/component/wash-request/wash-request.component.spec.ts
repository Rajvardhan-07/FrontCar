import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashRequestComponent } from './wash-request.component';

describe('WashRequestComponent', () => {
  let component: WashRequestComponent;
  let fixture: ComponentFixture<WashRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashRequestComponent]
    });
    fixture = TestBed.createComponent(WashRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
