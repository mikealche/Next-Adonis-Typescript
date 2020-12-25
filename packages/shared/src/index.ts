import { AuthController } from "@template/backend";
import axios, { AxiosRequestConfig } from "axios";
import Axios, { AxiosResponse } from "axios";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export type APIType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

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

const userRoutes = {
  me: {
    route: "/auth/me",
    method: "get",
    request: () => api.get<APIType<AuthController["me"]>>("/auth/me"),
    controllerName: "AuthController.me",
  },
  signup: {
    route: "/signup",
    method: "post",
    request: ({ email, password }: { email: string; password: string }) =>
      api.post<Awaited<ReturnType<AuthController["signup"]>>>("/signup", {
        email,
        password,
      }),
    controllerName: "AuthController.signup",
  },
  login: {
    route: "/login",
    method: "post",
    request: ({ email, password }: { email: string; password: string }) =>
      api.post<Awaited<ReturnType<AuthController["login"]>>>("/login", {
        email,
        password,
      }),
    controllerName: "AuthController.login",
  },
};

export const routes = {
  ...userRoutes,
};
