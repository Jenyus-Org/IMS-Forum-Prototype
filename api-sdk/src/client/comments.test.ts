import chai from "chai";
import Comment from "../models/comment";
import Client from "./client";

const expect = chai.expect;

describe("Comment Helper", () => {
  let client: Client;

  beforeEach(() => {
    client = new Client("http://localhost:8082/");
  });

  it("Should be able to request comments.", async () => {
    let resp;
    try {
      resp = await client.comments.get();
      resp.forEach((comment) => expect(comment).to.be.an.instanceOf(Comment));
    } catch (error) {
      console.error(error);
    }
    expect(resp).to.be.an.instanceOf(Array);
  });
});
