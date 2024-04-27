import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoNXTComponent } from './techno-nxt.component';

describe('TechnoNXTComponent', () => {
  let component: TechnoNXTComponent;
  let fixture: ComponentFixture<TechnoNXTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnoNXTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnoNXTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
