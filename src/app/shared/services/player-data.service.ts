import { Injectable } from '@angular/core';
import { Player } from '../../ranking/player/player.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, delay, catchError } from 'rxjs/operators';
import { PlayerOD } from '../../ranking/player/player-detail-page/playerOD.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(private http: HttpClient) {
  }

  getplayers$(world: number): Observable< Player[] >{
    return this.http.get(`${environment.apiUrl}/players/${world}`).pipe(
      catchError(this.handleError),
      tap(console.log),
      map(
          (list: any[]): Player[] => list.map(Player.fromJSON)
        )
      );
  }

  getPlayer$(world: number, player_Id:  string): Observable<Player> {
    return this.http.get(`${environment.apiUrl}/players/${world}/${player_Id}`).pipe(
      catchError(this.handleError),
        tap(console.log),
        map(
          Player.fromJSON)
        );
  }

  getPlayerOD$(world: number, player_Id: string): Observable<PlayerOD> {
    return this.http.get(`${environment.apiUrl}/playerODs/${world}/${player_Id}`).pipe(
      catchError(this.handleError),
        tap(console.log),
        map(
         PlayerOD.fromJSON)
        );
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
