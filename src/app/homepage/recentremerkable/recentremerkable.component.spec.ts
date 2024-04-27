import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentremerkableComponent } from './recentremerkable.component';

describe('RecentremerkableComponent', () => {
  let component: RecentremerkableComponent;
  let fixture: ComponentFixture<RecentremerkableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentremerkableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentremerkableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
