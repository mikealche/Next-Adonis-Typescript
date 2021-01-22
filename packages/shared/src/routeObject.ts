import { api } from "./api";
import { AxiosResponse } from "axios";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export type APIType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export type APISuccessValue<
  T extends () => Promise<AxiosResponse>
> = APIType<T>["data"];

export class RouteObject<ResponseType extends (...args: any) => any> {
  public async request(
    ...args: any
  ): Promise<AxiosResponse<APIType<ResponseType>>> {
    if (this.method === "get") {
      return api[this.method](this.route);
    } else if (this.method === "post") {
      return api[this.method](this.route, ...args);
    }
    return Promise.reject("invalid method");
  }

  constructor(
    public method: "get" | "post",
    public route: string,
    public handler: string
  ) {}
}
