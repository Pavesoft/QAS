import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationPolicyComponent } from './citation-policy.component';

describe('CitationPolicyComponent', () => {
  let component: CitationPolicyComponent;
  let fixture: ComponentFixture<CitationPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
