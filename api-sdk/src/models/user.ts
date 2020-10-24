import Client from "../client";
import Comment from "./comment";
import Post, { PostType } from "./post";

export default class User {
  public id: number;
  private client: Client;
  /* Lazily loaded attributes. */
  public username?: string;
  public email?: string;
  public provider?: string;
  public confirmed?: boolean;
  public blocked?: boolean;
  public role?: any;

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

  /* Posts */

  private _posts?: PostType[];

  get posts() {
    return this._posts || [];
  }

  set posts(newPosts: any[]) {
    this._posts = newPosts.map((c) =>
      c instanceof Post ? c : new Post({ client: this.client, ...c })
    );
  }

  constructor({ id, client, ...data }: any) {
    this.id = id!!;
    this.client = client;
    Object.assign(this, data);
  }

  public async fetch() {
    const data = await this.client.get("/users/" + this.id);
    Object.assign(this, data);
    return this;
  }
}
