import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAndFinancialServicesComponent } from './banking-and-financial-services.component';

describe('BankingAndFinancialServicesComponent', () => {
  let component: BankingAndFinancialServicesComponent;
  let fixture: ComponentFixture<BankingAndFinancialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingAndFinancialServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingAndFinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
