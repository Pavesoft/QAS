import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyDataManagementComponent } from './privacy-data-management.component';

describe('PrivacyDataManagementComponent', () => {
  let component: PrivacyDataManagementComponent;
  let fixture: ComponentFixture<PrivacyDataManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyDataManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyDataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
