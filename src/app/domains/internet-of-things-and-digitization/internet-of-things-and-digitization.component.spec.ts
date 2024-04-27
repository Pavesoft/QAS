import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetOfThingsAndDigitizationComponent } from './internet-of-things-and-digitization.component';

describe('InternetOfThingsAndDigitizationComponent', () => {
  let component: InternetOfThingsAndDigitizationComponent;
  let fixture: ComponentFixture<InternetOfThingsAndDigitizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetOfThingsAndDigitizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetOfThingsAndDigitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
