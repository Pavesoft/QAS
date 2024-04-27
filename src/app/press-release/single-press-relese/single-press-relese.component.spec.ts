import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePressReleseComponent } from './single-press-relese.component';

describe('SinglePressReleseComponent', () => {
  let component: SinglePressReleseComponent;
  let fixture: ComponentFixture<SinglePressReleseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePressReleseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePressReleseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
