import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchSingleComponent } from './research-single.component';

describe('ResearchSingleComponent', () => {
  let component: ResearchSingleComponent;
  let fixture: ComponentFixture<ResearchSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
