import chai from "chai";
import Client, { EmailAlreadyTakenError } from "./client";

const expect = chai.expect;

describe("Strapi client SDK.", () => {
  it("Should be able to register users.", async () => {
    const client = new Client();
    let resp;

    try {
      resp = await client.register({
        username: "TestUser",
        email: "test@test.com",
        password: "test123",
      });
      expect(resp.username).to.equal("TestUser");
    } catch (error) {
      expect(error).to.be.instanceOf(EmailAlreadyTakenError);
    }
  });
});
