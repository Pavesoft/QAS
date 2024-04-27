import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailAndEcommerceComponent } from './retail-and-ecommerce.component';

describe('RetailAndEcommerceComponent', () => {
  let component: RetailAndEcommerceComponent;
  let fixture: ComponentFixture<RetailAndEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailAndEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailAndEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
