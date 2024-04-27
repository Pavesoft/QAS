import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationCollaborationComponent } from './communication-collaboration.component';

describe('CommunicationCollaborationComponent', () => {
  let component: CommunicationCollaborationComponent;
  let fixture: ComponentFixture<CommunicationCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationCollaborationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
