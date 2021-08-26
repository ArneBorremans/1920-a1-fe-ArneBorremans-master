import { Injectable } from '@angular/core';
import { Tribe } from '../../ranking/tribe/tribe.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, delay, catchError } from 'rxjs/operators';
import { TribeOD } from '../../ranking/tribe/tribe-detail-page/TribeOD.model';

@Injectable({
  providedIn: 'root'
})
export class TribeDataService {
  constructor(private http: HttpClient) {
  }

  gettribes$(world: number): Observable<Tribe[]> {
    return this.http.get(`${environment.apiUrl}/tribes/${world}`).pipe(
      catchError(this.handleError),
      tap(console.log),
      map(
        (list: any[]): Tribe[] => list.map(Tribe.fromJSON)
      )
    );
  }


  getTribe$(world: number, tribe_Id: string): Observable<Tribe> {
    return this.http.get(`${environment.apiUrl}/tribes/${world}/${tribe_Id}`).pipe(
      catchError(this.handleError),
      tap(console.log),
      map(
        Tribe.fromJSON)
    );
  }

  getTribeOD$(world: number, tribe_Id: string): Observable<TribeOD> {
    return this.http.get(`${environment.apiUrl}/tribeODs/${world}/${tribe_Id}`).pipe(
      catchError(this.handleError),
      tap(console.log),
      map(
        TribeOD.fromJSON)
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
