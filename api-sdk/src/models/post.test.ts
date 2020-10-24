import chai from "chai";
import Client from "../client";
import { Markdown } from "../helpers/markdown";

const expect = chai.expect;

describe("Post", () => {
  let client: Client;

  beforeEach(() => {
    client = new Client("http://localhost:8082/");
  });

  it("Should be able to read a post's raw body and markdown to HTML output.", async () => {
    client.posts.get(1).then(async (post) => {
      expect(post.body).to.be.a("string");

      const md = Markdown();
      const bodyHTML = md.render(post.body!!);

      expect(post.bodyHTML).to.be.equal(bodyHTML);
    });
  });

  it("Should be able to comment under posts.", async () => {
    client
      .login({ identifier: "TestUser", password: "test123" })
      .then(async () => {
        client.posts.get(1).then(async (post) => {
          const numComments = post.comments.length;
          let resp;
          try {
            resp = await post.comment({
              body: "Test comment.",
            });
            expect(resp.body).to.be.equal("Test comment.");
            expect(post.comments.length).to.be.equal(numComments + 1);
          } catch (error) {
            console.error(error);
          }
          expect(resp).to.be.an.instanceOf(Object);
        });
      });
  });

  it("Should be able to read a post's author.", async () => {
    client.posts.get(1).then(async (post) => {
      await post.author?.fetch();
      expect(post.author.username).to.be.equal("TestUser");
    });
  });
});
