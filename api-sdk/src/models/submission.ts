import { Markdown } from "../helpers/markdown";
import Comment from "./comment";
import Thing from "./thing";
import User from "./user";

export default abstract class Submission extends Thing {
  /* Lazily loaded attributes. */
  public body?: string;

  /* Body */

  get bodyHTML() {
    const md = Markdown();
    return this.body && md.render(this.body);
  }

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

  public abstract async comment({ body }: { body: string }): Promise<Comment>;

  public abstract async fetch(): Promise<this>;
}
