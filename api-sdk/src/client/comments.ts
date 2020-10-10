import Comment from "../models/comment";
import Client from "./client";

export default class Comments {
  constructor(private client: Client) {}

  public async get(): Promise<Comment[]>;
  public async get(id: number): Promise<Comment>;
  public async get(id?: number) {
    if (id) {
      const data = await this.client.get("/comments/" + id);
      return new Comment({ client: this.client, ...data });
    } else {
      const data = await this.client.get("/comments");
      return data.map((d: any) => new Comment({ client: this.client, ...d }));
    }
  }
}
