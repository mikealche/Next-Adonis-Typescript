import { AuthController } from "@template/backend";
import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import Axios, { AxiosResponse } from "axios";

const api = Axios.create({
  baseURL: "http://localhost:3333/",
});

let authInterceptorID: number;
export const authenticateAPI = (token: string) => {
  authInterceptorID = api.interceptors.request.use((config) => {
    config.headers.authorization = `bearer ${token}`;
    return config;
  });
};

export const unauthenticateAPI = () => {
  api.interceptors.request.eject(authInterceptorID);
};

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export type APIType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
class RouteObject<ResponseType extends (...args: any) => any> {
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

const me = new RouteObject<AuthController["me"]>(
  "get",
  "/auth/me",
  "AuthController.me"
);

const userRoutes = {
  me: new RouteObject<AuthController["me"]>(
    "get",
    "/auth/me",
    "AuthController.me"
  ),
  signup: new RouteObject<AuthController["signup"]>(
    "post",
    "/auth/signup",
    "AuthController.signup"
  ),
  login: new RouteObject<AuthController["login"]>(
    "post",
    "/auth/login",
    "AuthController.login"
  ),
};

export const routes = {
  ...userRoutes,
};
