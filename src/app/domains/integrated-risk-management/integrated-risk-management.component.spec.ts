import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedRiskManagementComponent } from './integrated-risk-management.component';

describe('IntegratedRiskManagementComponent', () => {
  let component: IntegratedRiskManagementComponent;
  let fixture: ComponentFixture<IntegratedRiskManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedRiskManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedRiskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
