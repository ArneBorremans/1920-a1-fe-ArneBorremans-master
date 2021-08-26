import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable, EMPTY } from 'rxjs';
import { PlayerDataService } from '../shared/services/player-data.service';
import { TribeDataService } from '../shared/services/tribe-data.service';
import {distinctUntilChanged, filter, catchError} from 'rxjs/operators';
import { Player } from './player/player.model';
import { Tribe } from './tribe/tribe.model';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CurrentWorldService } from '../shared/services/current-world.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  @Input()
  _playersOrTribes = true;

  public currentPage = 1;

  private _fetchPlayers$: Observable<Player[]>
  private _fetchTribes$: Observable<Tribe[]>
  public errorMessage: string = "";
  //public currentPlayer: Player;
  //public currentTribe: Tribe;
  //public showDetailScreen = false;
  public filterName: string;
  public filterName$ = new Subject<string>();
  currentWorld;
  

  constructor(public _playerDataService: PlayerDataService, private _tribeDataService: TribeDataService, private route: ActivatedRoute, private currentWorldService: CurrentWorldService,
    private router: Router) {
    this.filterName$
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(
        val => (val === "") ? (this.pageSelectorEnable(), this.filterName = "") : (this.pageSelectorDisable(), this.filterName = val));

    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.fetchPlayersAndTribes();
      }
    })
  }
  
  pageSelector(value: any) {
    this.currentPage += value;
  }

  pageSelectorDisable() {
    this.currentPage = -1;
  }

  pageSelectorEnable() {
    this.currentPage = 1;
  }

  /*public setCurrentPlayer(player: Player) {
    this.currentPlayer = player;
    setTimeout(() => { this.showDetailScreen = true; }, 1);
  }

  public setCurrentTribe(tribe: Tribe) {
    this.currentTribe = tribe;
    setTimeout(() => { this.showDetailScreen = true; }, 1);
  }*/

  get players$(): Observable<Player[]> {
    return this._fetchPlayers$;
  } 

  get tribes$(): Observable<Tribe[]> {
    return this._fetchTribes$;
  }

  get playersOrTribes() {
    return this._playersOrTribes;
  }

  ngOnInit(): void {
    this.fetchPlayersAndTribes();
  }

  fetchPlayersAndTribes() {
    this.route.paramMap.subscribe(params => { this.currentWorld = +params.get('world'); });

    this.currentWorldService.changeWorld(this.currentWorld);

    this._fetchPlayers$ = this._playerDataService.getplayers$(this.currentWorld).pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    this._fetchTribes$ = this._tribeDataService.gettribes$(this.currentWorld).pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }
}
