import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from './comment/comment.model';
import { Observable, EMPTY } from 'rxjs';
import { CommentDataService } from '../shared/services/comment-data.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  private _fetchComments$: Observable<Comment[]>;

  name: string;
  commentText: string;
  public errorMessage: string = "";

  constructor(private _commentDataService: CommentDataService) {
    this._fetchComments$ = this._commentDataService.allComments$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  onSubmit() {
    if (this.name.length >= 2 && this.commentText.length >= 5) {
      this._commentDataService.addnewComment(new Comment(this.name, this.commentText, new Date()));
    }
    setTimeout(() => { location.reload(); }, 500);
  }

  onDelete(comment: Comment) {
    this._commentDataService.deleteComment(comment);
    setTimeout(() => { location.reload(); }, 500);
  }

  get comments$(): Observable<Comment[]> {
    return this._fetchComments$;
  }

  ngOnInit(): void {
  }
}

