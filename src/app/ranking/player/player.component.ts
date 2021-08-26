import { Component, OnInit, Input } from '@angular/core';
import { Player } from './player.model';
import { PlayerOD } from './player-detail-page/playerOD.model';
import { PlayerDataService } from '../../shared/services/player-data.service';
import { PointpipePipe } from '../pointpipe.pipe';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  @Input() public player: Player;
  @Input() public playerDataService: PlayerDataService;

  public playerOD: PlayerOD;

  constructor() {
  }

  ngOnInit(): void {
  }
}
