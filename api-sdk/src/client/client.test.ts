import chai from "chai";
import Client, { EmailAlreadyTakenError } from "./client";

const expect = chai.expect;

describe("Strapi Client", () => {
  it("Should be able to register users.", async () => {
    const client = new Client();
    let resp;

    try {
      resp = await client.register({
        username: "TestUser",
        email: "test@test.com",
        password: "test123",
      });
      expect(resp.username).to.be.equal("TestUser");
    } catch (error) {
      expect(error).to.be.an.instanceOf(EmailAlreadyTakenError);
    }
  });

  it("Should be able to login with the user credentials", async () => {
    const client = new Client();
    let resp;
    try {
      resp = await client.login({
        identifier: "test@test.com",
        password: "test123",
      });
      expect(resp.username).to.be.equal("TestUser");
    } catch (error) {
      console.error(error);
    }
    expect(resp).to.be.an.instanceOf(Object);
  });
});
