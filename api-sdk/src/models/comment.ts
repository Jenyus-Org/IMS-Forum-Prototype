import Client from "../client";

export default class Comment {
  public id: number;
  private client: Client;
  /* Lazily loaded attributes. */
  public body?: string;
  public author?: any;
  public parentComment?: number;
  public parentTutorial?: number;
  public parentPost?: number;

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

  constructor({ id, client, ...data }: any) {
    this.id = id!!;
    this.client = client;
    Object.assign(this, data);
  }

  public async comment({ body }: { body: string }) {
    const data = await this.client.post("/comments", {
      body,
      author: this.client.user.id,
      parentComment: this.id,
    });
    const comment = new Comment({ client: this.client, ...data });
    this.comments.push(comment);
    return comment;
  }

  public async fetch() {
    const data = await this.client.get("/comments/" + this.id);
    Object.assign(this, data);
  }
}
