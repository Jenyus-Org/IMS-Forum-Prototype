import Thing from "./thing";
import User from "./user";

export default class Comment extends Thing {
  /* Lazily loaded attributes. */
  public body?: string;
  public parentComment?: number;
  public parentTutorial?: number;
  public parentPost?: number;

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

  get parent() {
    if (this.parentPost) {
      return this.client.posts.get(this.parentPost);
    } else if (this.parentComment) {
      return (async () => {
        const data = await this.client.get("/comments" + this.parentComment);
        return new Comment({ client: this.client, ...data });
      })();
    }
    return null;
  }

  public async comment({ body }: { body: string }) {
    const data = await this.client.post("/comments", {
      body,
      author: this.client.user!.id,
      parentComment: this.id,
    });
    const comment = new Comment({ client: this.client, ...data });
    this.comments.push(comment);
    return comment;
  }

  public async fetch() {
    const data = await this.client.get("/comments/" + this.id);
    Object.assign(this, data);
    return this;
  }
}
