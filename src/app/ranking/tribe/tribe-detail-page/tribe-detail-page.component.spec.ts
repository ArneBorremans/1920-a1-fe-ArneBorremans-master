import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeDetailPageComponent } from './tribe-detail-page.component';

describe('TribeDetailPageComponent', () => {
  let component: TribeDetailPageComponent;
  let fixture: ComponentFixture<TribeDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribeDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
