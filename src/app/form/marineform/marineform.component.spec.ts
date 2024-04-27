import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineformComponent } from './marineform.component';

describe('MarineformComponent', () => {
  let component: MarineformComponent;
  let fixture: ComponentFixture<MarineformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarineformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
