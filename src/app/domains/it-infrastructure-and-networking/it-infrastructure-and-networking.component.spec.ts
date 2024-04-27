import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItInfrastructureAndNetworkingComponent } from './it-infrastructure-and-networking.component';

describe('ItInfrastructureAndNetworkingComponent', () => {
  let component: ItInfrastructureAndNetworkingComponent;
  let fixture: ComponentFixture<ItInfrastructureAndNetworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItInfrastructureAndNetworkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItInfrastructureAndNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
