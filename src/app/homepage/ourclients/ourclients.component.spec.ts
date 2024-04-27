import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurclientsComponent } from './ourclients.component';

describe('OurclientsComponent', () => {
  let component: OurclientsComponent;
  let fixture: ComponentFixture<OurclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurclientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
