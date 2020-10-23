import chai from "chai";
import User from "../models/user";
import Client from "./client";

const expect = chai.expect;

describe("User Helper", () => {
  let client: Client;

  beforeEach(() => {
    client = new Client("http://localhost:8082/");
  });

  it("Should be able to request users.", async () => {
    let resp;
    try {
      resp = await client.users.get();
      resp.forEach((user) => expect(user).to.be.an.instanceOf(User));
    } catch (error) {
      console.error(error);
    }
    expect(resp).to.be.an.instanceOf(Array);
  });
});
