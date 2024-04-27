import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkmatrixComponent } from './sparkmatrix.component';

describe('SparkmatrixComponent', () => {
  let component: SparkmatrixComponent;
  let fixture: ComponentFixture<SparkmatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparkmatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparkmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
