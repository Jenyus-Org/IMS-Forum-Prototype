import chai from "chai";
import Comment from "../models/comment";
import Client from "./client";

const expect = chai.expect;

describe("Strapi client SDK.", () => {
  it("Should be able to request comments.", async () => {
    const client = new Client();
    client
      .login({ identifier: "TestUser", password: "test123" })
      .then(async () => {
        let resp;

        try {
          resp = await client.comments.get();
          resp.forEach((comment) =>
            expect(comment).to.be.an.instanceOf(Comment)
          );
        } catch (error) {
          console.error(error);
        }
        expect(resp).to.be.an.instanceOf(Array);
      });
  });
});
