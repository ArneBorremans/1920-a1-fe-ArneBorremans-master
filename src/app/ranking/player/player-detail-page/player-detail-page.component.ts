import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Player } from '../player.model';
import { PlayerOD } from './playerOD.model';
import { PlayerDataService } from '../../../shared/services/player-data.service';
import { Observable, EMPTY, Subscription} from 'rxjs';
import { catchError, distinct, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CurrentWorldService } from '../../../shared/services/current-world.service';
import { TribeDataService } from '../../../shared/services/tribe-data.service';
import { Tribe } from '../../tribe/tribe.model';

@Component({
  selector: 'app-player-detail-page',
  templateUrl: './player-detail-page.component.html',
  styleUrls: ['./player-detail-page.component.css']
})
export class PlayerDetailPageComponent implements OnInit, OnDestroy {  
  public playerOD: PlayerOD;
  public player: Player;
  public tribe: Tribe;
  public errorMessage: string = "";
  public isDataAvailable: boolean;
  private playerODsubscription: Subscription;
  private playersubscription: Subscription;
  currentWorld;
  private currentPlayerId;

  constructor(private _playerDataService: PlayerDataService, private route: ActivatedRoute, private currentWorldService: CurrentWorldService, private _tribeDataService: TribeDataService) {
  }

  fetch() {
    this.route.paramMap.subscribe(params => { this.currentWorld = +params.get('world'); });
    this.route.paramMap.subscribe(params => { this.currentPlayerId = +params.get('id'); })

    this.currentWorldService.changeWorld(this.currentWorld);    
  }

  avgVillaPoints() {
    return Math.round(this.player.points / this.player.villageCount)
  }

  public loadPlayerOD() {
    this.playerFromBack();
  }

  public async playerFromBack() {
    this._playerDataService.getPlayerOD$(this.currentWorld, String(this.currentPlayerId)).pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    ).subscribe(x => this.playerOD = x as PlayerOD);;

    this._playerDataService.getPlayer$(this.currentWorld, String(this.currentPlayerId)).pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    ).subscribe(x => this.player = x as Player);

    setTimeout(() => {
      this._tribeDataService.getTribe$(this.currentWorld, String(this.player.tribe_Id)).pipe(
        catchError(err => {
          this.errorMessage = err;
          return EMPTY;
        })
      ).subscribe(x => this.tribe = x as Tribe); }, 400);
  }

  async ngOnInit() {
    this.isDataAvailable = false;
    this.fetch();
    await this.loadPlayerOD();
    this.isDataAvailable = true;
  }

  ngOnDestroy(): void {
  }
}
