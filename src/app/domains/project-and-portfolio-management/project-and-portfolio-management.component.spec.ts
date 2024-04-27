import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAndPortfolioManagementComponent } from './project-and-portfolio-management.component';

describe('ProjectAndPortfolioManagementComponent', () => {
  let component: ProjectAndPortfolioManagementComponent;
  let fixture: ComponentFixture<ProjectAndPortfolioManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAndPortfolioManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAndPortfolioManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
