import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackageComponent } from './update-package.component';

describe('UpdatePackageComponent', () => {
  let component: UpdatePackageComponent;
  let fixture: ComponentFixture<UpdatePackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePackageComponent]
    });
    fixture = TestBed.createComponent(UpdatePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
