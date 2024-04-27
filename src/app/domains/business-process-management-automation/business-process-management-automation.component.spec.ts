import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProcessManagementAutomationComponent } from './business-process-management-automation.component';

describe('BusinessProcessManagementAutomationComponent', () => {
  let component: BusinessProcessManagementAutomationComponent;
  let fixture: ComponentFixture<BusinessProcessManagementAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessProcessManagementAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessProcessManagementAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
