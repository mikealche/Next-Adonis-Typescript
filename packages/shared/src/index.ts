import { AuthController } from "@template/backend";
import Axios, { AxiosResponse } from "axios";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

const api = Axios.create({
  baseURL: "http://localhost:3333/",
});

const userRoutes = {
  me: {
    route: "/me",
    method: "get",
    request: (): ReturnType<AuthController["me"]> => Axios.get("/me"),
    controllerName: "AuthController.me",
  },
  signup: {
    route: "/signup",
    method: "post",
    request: ({ email, password }: { email: string; password: string }) =>
      api.post<Awaited<ReturnType<AuthController["signup"]>>>("signup", {
        email,
        password,
      }),
    controllerName: "AuthController.signup",
  },
};

export const routes = {
  ...userRoutes,
};
