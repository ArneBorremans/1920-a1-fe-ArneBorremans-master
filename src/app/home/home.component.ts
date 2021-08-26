import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerDataService } from '../shared/services/player-data.service';
import { TribeDataService } from '../shared/services/tribe-data.service';
import { Router, ɵROUTER_PROVIDERS } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() worldEvent = new EventEmitter<number>();

  constructor(private router: Router) { }

  public currentWorld: number;

  ngOnInit() {
  }
}
