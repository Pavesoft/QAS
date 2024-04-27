import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxAndMartechComponent } from './cx-and-martech.component';

describe('CxAndMartechComponent', () => {
  let component: CxAndMartechComponent;
  let fixture: ComponentFixture<CxAndMartechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxAndMartechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CxAndMartechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
