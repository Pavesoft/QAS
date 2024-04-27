import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhaoComponent } from './whao.component';

describe('WhaoComponent', () => {
  let component: WhaoComponent;
  let fixture: ComponentFixture<WhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
