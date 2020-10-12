import chai from "chai";
import User from "../models/user";
import Client from "./client";

const expect = chai.expect;

describe("User Helper", () => {
  it("Should be able to request users.", async () => {
    const client = new Client();
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
