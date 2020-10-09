import chai from "chai";
import Client from "../client";

const expect = chai.expect;

describe("Strapi client SDK.", () => {
  it("Should be able to comment.", async () => {
    const client = new Client();
    client
      .login({ identifier: "TestUser", password: "test123" })
      .then(async () => {
        client.posts.get().then(async (posts) => {
          const post = posts[0];
          const numComments = post.comments.length;
          let resp;
          try {
            resp = await post.comment({
              body: "Test comment.",
            });
            expect(resp.comments.length).to.be.equal(numComments + 1);
          } catch (error) {
            console.error(error);
          }
          expect(resp).to.be.an.instanceOf(Object);
        });
      });
  });
});
