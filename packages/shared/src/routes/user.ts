import { AuthController } from "@template/backend";
import { RouteObject } from "../routeObject";

export interface AuthInterface {
  email: string;
  password: string;
}

export const user = {
  me: new RouteObject<void, AuthController["me"]>({
    method: "get",
    route: "/auth/me",
    controller: "AuthController.me",
  }),

  signup: new RouteObject<AuthInterface, AuthController["signup"]>({
    method: "post",
    route: "/auth/signup",
    controller: "AuthController.signup",
  }),

  login: new RouteObject<AuthInterface, AuthController["login"]>({
    method: "post",
    route: "/auth/login",
    controller: "AuthController.login",
  }),
};
