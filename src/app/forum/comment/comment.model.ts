interface CommentJson {
  comment_Id: number;
  writer: string;
  content: string;
  date: string;
}
export class Comment {
  constructor(
    private _writer: string,
    private _content: string,
    private _date: Date,
    private _comment_Id?: number) {
  }

  get comment_Id() {
    return this._comment_Id;
  }

  get writer(): string {
    return this._writer;
  }

  get content(): string {
    return this._content;
  }

  get date(): Date {
    return this._date;
  }

  static fromJSON(json: CommentJson): Comment {
    const comment = new Comment(json.writer, json.content, new Date(json.date), json.comment_Id);
    return comment;
  }

  toJSON(): CommentJson {
    return <CommentJson>{
      writer: this.writer,
      content: this.content,
      date: this.date.toString()
    };
  }
}
