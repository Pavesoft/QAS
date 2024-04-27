import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPartnerComponent } from './client-partner.component';

describe('ClientPartnerComponent', () => {
  let component: ClientPartnerComponent;
  let fixture: ComponentFixture<ClientPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
