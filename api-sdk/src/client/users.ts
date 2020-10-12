import User from "../models/user";
import Client from "./client";

export default class Users {
  constructor(private client: Client) {}

  public async get(): Promise<User[]>;
  public async get(id: number): Promise<User>;
  public async get(id?: number) {
    if (id) {
      return await new User({ client: this.client, id }).fetch();
    } else {
      const data = await this.client.get("/users");
      return data.map((d: any) => new User({ client: this.client, ...d }));
    }
  }
}
