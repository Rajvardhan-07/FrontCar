import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherDetailsComponent } from './washer-details.component';

describe('WasherDetailsComponent', () => {
  let component: WasherDetailsComponent;
  let fixture: ComponentFixture<WasherDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasherDetailsComponent]
    });
    fixture = TestBed.createComponent(WasherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
