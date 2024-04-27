import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResearchComponent } from './single-research.component';

describe('SingleResearchComponent', () => {
  let component: SingleResearchComponent;
  let fixture: ComponentFixture<SingleResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
