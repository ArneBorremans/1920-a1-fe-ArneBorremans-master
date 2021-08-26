import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecalculatorComponent } from './datecalculator.component';

describe('DatecalculatorComponent', () => {
  let component: DatecalculatorComponent;
  let fixture: ComponentFixture<DatecalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatecalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
