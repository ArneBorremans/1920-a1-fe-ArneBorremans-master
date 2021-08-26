import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Tribe } from '../tribe.model';
import { TribeOD } from './TribeOD.model';
import { TribeDataService } from '../../../shared/services/tribe-data.service';
import { Observable, EMPTY, Subscription } from 'rxjs';
import { catchError, distinct, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CurrentWorldService } from '../../../shared/services/current-world.service';

@Component({
  selector: 'app-tribe-detail-page',
  templateUrl: './tribe-detail-page.component.html',
  styleUrls: ['./tribe-detail-page.component.css']
})
export class TribeDetailPageComponent implements OnInit, OnDestroy {
  public tribeOD: TribeOD;
  public tribe: Tribe;
  public errorMessage: string = "";
  public isDataAvailable: boolean;
  currentWorld;
  private currentTribeId;

  constructor(private _tribeDataService: TribeDataService, private route: ActivatedRoute, private currentWorldService: CurrentWorldService) {

  }

  fetch() {
    this.route.paramMap.subscribe(params => { this.currentWorld = +params.get('world'); });
    this.route.paramMap.subscribe(params => { this.currentTribeId = +params.get('id'); })

    this.currentWorldService.changeWorld(this.currentWorld);
  }

  async ngOnInit() {
    this.isDataAvailable = false;
    this.fetch();
    await this.loadTribeOD();
    this.isDataAvailable = true;
  }

  public loadTribeOD() {
    this.tribeFromBack();
  }

  public tribeFromBack() {
    this._tribeDataService.getTribeOD$(this.currentWorld, String(this.currentTribeId)).pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    ).subscribe(x => this.tribeOD = x as TribeOD);

    this._tribeDataService.getTribe$(this.currentWorld, String(this.currentTribeId)).pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    ).subscribe(x => this.tribe = x as Tribe);
  }

  avgVillaPoints() {
    return Math.round(this.tribe.allPoints / this.tribe.villageCount)
  }

  ngOnDestroy(): void {
  }
}
