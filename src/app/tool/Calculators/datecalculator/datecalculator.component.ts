import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-datecalculator',
  templateUrl: './datecalculator.component.html',
  styleUrls: ['./datecalculator.component.css']
})
export class DatecalculatorComponent implements OnInit {

  constructor() { }

  public startDateControl = new FormControl(new Date());
  public endDateControl = new FormControl(new Date());

  public startDate;
  public endDate;

  ngOnInit(): void {
    this._setMaxDate();
    this._setMinDate();
  }
  public date = new Date();

  public minDate = new Date();
  public maxDate = new Date();


  private _setMinDate() {
    const now = new Date();
    this.minDate = new Date();
    this.minDate.setDate(now.getDate() - 365);
  }


  private _setMaxDate() {
    const now = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(now.getDate() + 365);
  }

  public setStartDate(date: Date) {
    console.log(date);
    this.startDate = date;
  }

  public setEndDate(date: Date) {
    console.log(date);
    this.endDate = date;
  }
}



