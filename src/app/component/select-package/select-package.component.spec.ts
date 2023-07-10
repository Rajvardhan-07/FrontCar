import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPackageComponent } from './select-package.component';

describe('SelectPackageComponent', () => {
  let component: SelectPackageComponent;
  let fixture: ComponentFixture<SelectPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPackageComponent]
    });
    fixture = TestBed.createComponent(SelectPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
