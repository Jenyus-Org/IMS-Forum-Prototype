import axios, { AxiosInstance } from "axios";
import BaseError from "../baseError";
import User from "../models/user";
import strapiErrors from "../strapiErrors";
import Comments from "./comments";
import Posts from "./posts";
import Users from "./users";

export class EmailAlreadyTakenError extends BaseError {
  constructor(public message: string) {
    super();
  }
}

export default class Client {
  private requestor: AxiosInstance;
  private token?: string;
  public user?: User;
  public posts: Posts;
  public comments: Comments;
  public users: Users;

  constructor(private basePath: string = "http://localhost:1337/") {
    this.requestor = axios.create({
      baseURL: basePath,
    });
    this.posts = new Posts(this);
    this.comments = new Comments(this);
    this.users = new Users(this);
  }

  public async register(creds: {
    username: string;
    email: string;
    password: string;
  }) {
    try {
      let resp = await this.requestor.post("/auth/local/register", creds);
      this.token = resp.data.jwt;
      this.user = new User({ client: this, ...resp.data.user });
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
    return this.user;
  }

  public async login(creds: { identifier: string; password: string }) {
    try {
      const resp = await this.requestor.post("/auth/local", creds);
      this.token = resp.data.jwt;
      this.user = new User({ client: this, ...resp.data.user });
    } catch (error) {
      console.error("An error occured:", error.response);
      throw error;
    }
    return this.user;
  }

  private addHeadersToConfig(config?: any) {
    if (this.token) {
      let headers = {
        Authorization: `Bearer ${this.token}`,
      };

      if (config) {
        if (config.headers) {
          config.headers = {
            ...config.headers,
            ...headers,
          };
        } else {
          config.headers = headers;
        }
      } else {
        config = {
          headers,
        };
      }
    }

    return config;
  }

  public async get(endpoint: string, config?: any) {
    config = this.addHeadersToConfig(config);

    try {
      const resp = await this.requestor.get(endpoint, config);
      return resp.data;
    } catch (error) {
      console.error(error);
    }
  }

  public async post(endpoint: string, data: any, config?: any) {
    config = this.addHeadersToConfig(config);

    try {
      const resp = await this.requestor.post(endpoint, data, config);
      return resp.data;
    } catch (error) {
      console.error(error);
    }
  }
}
