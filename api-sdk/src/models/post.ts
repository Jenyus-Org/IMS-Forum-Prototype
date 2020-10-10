import Client from "../client";
import Comment from "./comment";
import User from "./user";

export default class Post {
  public id: number;
  private client: Client;
  /* Lazily loaded attributes. */
  public title?: string;
  public body?: string;

  /* Author */

  public _author?: User;

  get author() {
    return this._author;
  }

  set author(newAuthor: any) {
    let na = newAuthor;
    if (!isNaN(newAuthor)) {
      na = new User({ id: newAuthor, client: this.client });
    } else {
      na = new User({ client: this.client, ...newAuthor });
    }
    this._author = na;
  }

  /* Comments */

  private _comments?: Comment[];

  get comments() {
    return this._comments || [];
  }

  set comments(newComments: any[]) {
    this._comments = newComments.map((c) =>
      c instanceof Comment ? c : new Comment({ client: this.client, ...c })
    );
  }

  constructor({ id, client, ...data }: any) {
    this.id = id!!;
    this.client = client;
    Object.assign(this, data);
  }

  public async comment({ body }: { body: string }) {
    const data = await this.client.post("/comments", {
      body,
      author: this.client.user.id,
      parentPost: this.id,
    });
    const comment = new Comment({ client: this.client, ...data });
    this.comments.push(comment);
    return comment;
  }

  public async fetch() {
    const data = await this.client.get("/posts/" + this.id);
    Object.assign(this, data);
    return this;
  }
}
