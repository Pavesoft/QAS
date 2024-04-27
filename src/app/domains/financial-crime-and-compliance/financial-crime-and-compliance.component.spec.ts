import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCrimeAndComplianceComponent } from './financial-crime-and-compliance.component';

describe('FinancialCrimeAndComplianceComponent', () => {
  let component: FinancialCrimeAndComplianceComponent;
  let fixture: ComponentFixture<FinancialCrimeAndComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialCrimeAndComplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialCrimeAndComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
