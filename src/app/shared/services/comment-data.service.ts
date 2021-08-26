import { Injectable } from '@angular/core';
import { Comment } from '../../forum/comment/comment.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { map, tap, delay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentDataService {
  private _comments$ = new BehaviorSubject<Comment[]>([]);
  private _comments: Comment[];

  constructor(private http: HttpClient) {
    this.comments$.subscribe((comments: Comment[]) => {
      this._comments = comments;
      this._comments$.next(this._comments);
    })
  }

  get comments$(): Observable<Comment[]> {
    return this.http.get(`${environment.apiUrl}/comments/`).pipe(
      catchError(this.handleError),
      tap(console.log),
      map(
        (list: any[]): Comment[] => list.map(Comment.fromJSON)
      )
    );
  }

  get allComments$(): Observable<Comment[]> {
    return this._comments$;
  }

  addnewComment(comment: Comment) {
    return this.http
      .post(`${environment.apiUrl}/comments/`, comment.toJSON())
      .pipe(
        catchError(this.handleError), map(Comment.fromJSON))
      .subscribe((com: Comment) => {
        this._comments = [...this._comments, com];
      })
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

  deleteComment(comment: Comment) {
    console.log(comment.comment_Id);
    return this.http
      .delete(`${environment.apiUrl}/comments/${comment.comment_Id}`)
      .pipe(tap(console.log), catchError(this.handleError))
      .subscribe(x => {
        console.log(x);
      });;
  }
}
