import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChangingToolComponent } from './game-changing-tool.component';

describe('GameChangingToolComponent', () => {
  let component: GameChangingToolComponent;
  let fixture: ComponentFixture<GameChangingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameChangingToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameChangingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
