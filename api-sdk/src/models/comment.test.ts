import chai from "chai";
import Client from "../client";

const expect = chai.expect;

describe("Comment", () => {
  let client: Client;

  beforeEach(() => {
    client = new Client("http://localhost:8082/");
  });

  it("Should be able to comment under comments.", async () => {
    client
      .login({ identifier: "TestUser", password: "test123" })
      .then(async () => {
        client.comments.get(1).then(async (comment) => {
          const numComments = comment.comments.length;
          let resp;
          try {
            resp = await comment.comment({
              body: "Test comment.",
            });
            expect(resp.body).to.be.equal("Test comment.");
            expect(comment.comments.length).to.be.equal(numComments + 1);
          } catch (error) {
            console.error(error);
          }
          expect(resp).to.be.an.instanceOf(Object);
        });
      });
  });

  it("Should be able to read a comment's author.", async () => {
    client.comments.get(1).then(async (post) => {
      await post.author?.fetch();
      expect(post.author.username).to.be.equal("TestUser");
    });
  });
});
