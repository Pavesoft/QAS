import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseItServicesComponent } from './enterprise-it-services.component';

describe('EnterpriseItServicesComponent', () => {
  let component: EnterpriseItServicesComponent;
  let fixture: ComponentFixture<EnterpriseItServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseItServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseItServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
