import Client from "../client";

export default class Post {
  public id: number;
  private client: Client;
  public title?: string;
  public body?: string;
  public author?: any;
  public comments: any[] = [];

  constructor({ id, client, ...data }: any) {
    this.id = id;
    this.client = client;
    Object.assign(this, data);
  }

  public async comment({ body }: { body: string }) {
    const data = await this.client.post("/comments", {
      body,
      author: this.client.user.id,
      parent_post: this.id,
    });
    this.comments.push(data);
    return this;
  }
}
