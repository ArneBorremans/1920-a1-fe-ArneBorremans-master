import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() public comment: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
