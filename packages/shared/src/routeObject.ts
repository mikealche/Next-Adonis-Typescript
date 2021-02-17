import { api } from "./api";
import { AxiosResponse } from "axios";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export type APIType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export type APISuccessValue<
  T extends () => Promise<AxiosResponse>
> = APIType<T>["data"];

export class RouteObject<
  RequestType extends any,
  ResponseType extends (...args: any) => any
> {
  public async request(
    payload: RequestType
  ): Promise<AxiosResponse<APIType<ResponseType>>> {
    if (this.method === "get") {
      return api[this.method](
        `${this.route}?${new URLSearchParams(payload as {})}`
      );
    } else if (this.method === "post") {
      return api[this.method](this.route, payload);
    }
    return Promise.reject("invalid method");
  }

  constructor(
    public method: "get" | "post",
    public route: string,
    public handler: string
  ) {}
}
