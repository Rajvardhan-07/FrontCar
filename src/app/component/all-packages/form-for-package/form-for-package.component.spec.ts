import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForPackageComponent } from './form-for-package.component';

describe('FormForPackageComponent', () => {
  let component: FormForPackageComponent;
  let fixture: ComponentFixture<FormForPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormForPackageComponent]
    });
    fixture = TestBed.createComponent(FormForPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
