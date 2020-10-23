import Comment from "./comment";
import Submission from "./submission";

export default class Post extends Submission {
  public title?: string;

  public async comment({ body }: { body: string }) {
    const data = await this.client.post("/comments", {
      body,
      author: this.client.user!.id,
      parentPost: this.id,
    });
    const comment = new Comment({ client: this.client, ...data });
    this.comments.push(comment);
    return comment;
  }

  public async fetch() {
    const data = await this.client.get("/posts/" + this.id);
    Object.assign(this, data);
    return this;
  }
}
