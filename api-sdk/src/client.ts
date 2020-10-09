import axios, { AxiosInstance } from "axios";
import BaseError from "./baseError";
import strapiErrors from "./strapiErrors";

export class EmailAlreadyTakenError extends BaseError {
  constructor(public message: string) {
    super();
  }
}

export default class Client {
  private requestor: AxiosInstance;
  private token?: string;

  constructor(private basePath: string = "http://localhost:1337/") {
    this.requestor = axios.create({
      baseURL: basePath,
    });
  }

  public async register(creds: {
    username: string;
    email: string;
    password: string;
  }) {
    let user;
    try {
      let resp = await this.requestor.post("/auth/local/register", creds);
      this.token = resp.data.jwt;
      user = resp.data.user;
    } catch (error) {
      for (const data of error.response.data.message) {
        for (const message of data.messages) {
          switch (message.id) {
            case strapiErrors.REGISTER_EMAIL_TAKEN:
              throw new EmailAlreadyTakenError(message.message);
            default:
              console.error("An error occured:", error.response);
          }
        }
      }
      throw error;
    }
    return user;
  }

  public async login(creds: { identifier: string; password: string }) {
    let user;
    try {
      let resp = await this.requestor.post("/auth/local", creds);
      user = resp.data.user;
      this.token = resp.data.jwt;
      user = resp.data.user;
    } catch (error) {
      console.error("An error occured:", error.response);
      throw error;
    }
    return user;
  }
}
