import { AuthController } from "@template/backend";
import { RouteObject } from "../routeObject";

export interface AuthInterface {
  email: string;
  password: string;
}

export const user = {
  me: new RouteObject<null, AuthController["me"]>(
    "get",
    "/auth/me",
    "AuthController.me"
  ),

  signup: new RouteObject<AuthInterface, AuthController["signup"]>(
    "post",
    "/auth/signup",
    "AuthController.signup"
  ),

  login: new RouteObject<AuthInterface, AuthController["login"]>(
    "post",
    "/auth/login",
    "AuthController.login"
  ),
};
