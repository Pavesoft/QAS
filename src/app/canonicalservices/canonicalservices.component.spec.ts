import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanonicalservicesComponent } from './canonicalservices.component';

describe('CanonicalservicesComponent', () => {
  let component: CanonicalservicesComponent;
  let fixture: ComponentFixture<CanonicalservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanonicalservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanonicalservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
