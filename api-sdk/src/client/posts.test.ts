import chai from "chai";
import Post from "../models/post";
import Client from "./client";

const expect = chai.expect;

describe("Post Helper", () => {
  it("Should be able to request posts.", async () => {
    const client = new Client();
    client
      .login({ identifier: "TestUser", password: "test123" })
      .then(async () => {
        let resp;

        try {
          resp = await client.posts.get();
          resp.forEach((post) => expect(post).to.be.an.instanceOf(Post));
        } catch (error) {
          console.error(error);
        }
        expect(resp).to.be.an.instanceOf(Array);
      });
  });
  it("Should be able to create posts.", async () => {
    const client = new Client();
    client
      .login({ identifier: "TestUser", password: "test123" })
      .then(async () => {
        let resp;

        try {
          resp = await client.posts.create({
            title: "Test",
            body: "Test body.",
          });
          expect(resp.body).to.be.equal("Test body.");
          expect(resp.author.id).to.be.equal(client.user.id);
        } catch (error) {
          console.error(error);
        }
        expect(resp).to.be.an.instanceOf(Object);
      });
  });
});
