import { Component, OnInit, Input } from '@angular/core';
import { Tribe } from './tribe.model';

@Component({
  selector: 'app-tribe',
  templateUrl: './tribe.component.html',
  styleUrls: ['./tribe.component.css']
})
export class TribeComponent implements OnInit {
  @Input() public tribe: Tribe;

  constructor() { }

  ngOnInit(): void {
  }
}
