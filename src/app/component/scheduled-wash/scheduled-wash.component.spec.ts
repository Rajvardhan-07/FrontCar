import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledWashComponent } from './scheduled-wash.component';

describe('ScheduledWashComponent', () => {
  let component: ScheduledWashComponent;
  let fixture: ComponentFixture<ScheduledWashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledWashComponent]
    });
    fixture = TestBed.createComponent(ScheduledWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
