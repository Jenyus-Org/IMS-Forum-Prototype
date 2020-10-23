import Post from "../models/post";
import Client from "./client";

export default class Posts {
  constructor(private client: Client) {}

  public async get(): Promise<InstanceType<typeof Post>[]>;
  public async get(id: number): Promise<InstanceType<typeof Post>>;
  public async get(id?: number) {
    if (id) {
      return await new Post({ client: this.client, id }).fetch();
    } else {
      const data = await this.client.get("/posts");
      return data.map((d: any) => new Post({ client: this.client, ...d }));
    }
  }

  public async create({ title, body }: { title: string; body: string }): Promise<InstanceType<typeof Post>> {
    const data = await this.client.post("/posts", {
      title,
      body,
      author: this.client.user!.id,
    });
    return new Post({ client: this.client, ...data });
  }
}
