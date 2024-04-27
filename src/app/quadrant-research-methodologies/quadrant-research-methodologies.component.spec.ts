import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrantResearchMethodologiesComponent } from './quadrant-research-methodologies.component';

describe('QuadrantResearchMethodologiesComponent', () => {
  let component: QuadrantResearchMethodologiesComponent;
  let fixture: ComponentFixture<QuadrantResearchMethodologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadrantResearchMethodologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadrantResearchMethodologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
