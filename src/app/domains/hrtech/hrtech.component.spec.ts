import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrtechComponent } from './hrtech.component';

describe('HrtechComponent', () => {
  let component: HrtechComponent;
  let fixture: ComponentFixture<HrtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrtechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
