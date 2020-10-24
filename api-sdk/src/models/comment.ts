import { PostType } from "./post";
import Submission from "./submission";

export default class Comment extends Submission {
  /* Lazily loaded attributes. */
  public parentComment?: number;
  public parentTutorial?: number;
  public parentPost?: number;

  get parent(): Promise<PostType | Comment> | null {
    if (this.parentPost) {
      return this.client.posts.get(this.parentPost);
    } else if (this.parentComment) {
      return this.client.comments.get(this.parentComment);
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
