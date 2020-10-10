import Client from "../client";

export default abstract class Thing {
  public id: number;
  protected client: Client;

  constructor({ id, client, ...data }: any) {
    this.id = id!!;
    this.client = client;
    Object.assign(this, data);
  }
}
