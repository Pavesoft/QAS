import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketIntelligenceAnalystComponent } from './market-intelligence-analyst.component';

describe('MarketIntelligenceAnalystComponent', () => {
  let component: MarketIntelligenceAnalystComponent;
  let fixture: ComponentFixture<MarketIntelligenceAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketIntelligenceAnalystComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketIntelligenceAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
