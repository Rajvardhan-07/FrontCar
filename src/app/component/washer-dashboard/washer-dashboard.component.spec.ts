import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherDashboardComponent } from './washer-dashboard.component';

describe('WasherDashboardComponent', () => {
  let component: WasherDashboardComponent;
  let fixture: ComponentFixture<WasherDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasherDashboardComponent]
    });
    fixture = TestBed.createComponent(WasherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
