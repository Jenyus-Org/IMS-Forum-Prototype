import Client from "../client";

export default class Post {
  public title?: string;
  public body?: string;
  public author?: any;

  constructor(public id: number, private client: Client) {}

  public async comment({ body }: { body: string }) {
    const data = this.client.post("/comments", {
      body,
      author: this.client.user.id,
      parent_post: this.id,
    });
    Object.assign(this, data);
    return this;
  }
}
