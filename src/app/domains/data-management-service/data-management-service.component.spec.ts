import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagementServiceComponent } from './data-management-service.component';

describe('DataManagementServiceComponent', () => {
  let component: DataManagementServiceComponent;
  let fixture: ComponentFixture<DataManagementServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagementServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataManagementServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
