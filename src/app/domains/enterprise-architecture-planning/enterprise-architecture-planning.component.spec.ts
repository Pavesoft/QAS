import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseArchitecturePlanningComponent } from './enterprise-architecture-planning.component';

describe('EnterpriseArchitecturePlanningComponent', () => {
  let component: EnterpriseArchitecturePlanningComponent;
  let fixture: ComponentFixture<EnterpriseArchitecturePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseArchitecturePlanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseArchitecturePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
