import { api } from "./api";
import { AxiosResponse } from "axios";
import User from "@template/backend/build/app/Models/User";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export type APIType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export type APISuccessValue<
  T extends () => Promise<AxiosResponse>
> = APIType<T>["data"];

type UserRoles = InstanceType<typeof User>["role"][];

type RouteObjectParams = {
  method: "get" | "post";
  route: string;
  controller: string;
  isProtected?: boolean;
  requiredRoles?: UserRoles;
};

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

  public method: "get" | "post";
  public route: string;
  public controller: string;
  public isProtected?: boolean;
  public requiredRoles?: UserRoles;

  constructor({
    method,
    route,
    controller,
    isProtected,
    requiredRoles,
  }: RouteObjectParams) {
    this.method = method;
    this.route = route;
    this.controller = controller;
    this.isProtected = isProtected;
    this.requiredRoles = requiredRoles;
  }
}
