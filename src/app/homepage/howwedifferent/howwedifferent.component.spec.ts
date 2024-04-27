import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowwedifferentComponent } from './howwedifferent.component';

describe('HowwedifferentComponent', () => {
  let component: HowwedifferentComponent;
  let fixture: ComponentFixture<HowwedifferentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowwedifferentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowwedifferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
