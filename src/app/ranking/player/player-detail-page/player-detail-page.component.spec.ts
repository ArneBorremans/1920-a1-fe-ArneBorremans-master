import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailPageComponent } from './player-detail-page.component';

describe('PlayerDetailPageComponent', () => {
  let component: PlayerDetailPageComponent;
  let fixture: ComponentFixture<PlayerDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
