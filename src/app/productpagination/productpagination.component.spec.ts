import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpaginationComponent } from './productpagination.component';

describe('ProductpaginationComponent', () => {
  let component: ProductpaginationComponent;
  let fixture: ComponentFixture<ProductpaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductpaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
