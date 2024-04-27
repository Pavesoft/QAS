import { ComponentFixture, TestBed } from '@angular/core/testing';


import { DataAnalyticsAndArtificialIntelligenceComponent } from './data-analytics-and-artificial-intelligence.component';

describe('DataAnalyticsAndArtificialIntelligenceComponent', () => {
  let component: DataAnalyticsAndArtificialIntelligenceComponent;
  let fixture: ComponentFixture<DataAnalyticsAndArtificialIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAnalyticsAndArtificialIntelligenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAnalyticsAndArtificialIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
