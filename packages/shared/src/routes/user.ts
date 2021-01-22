import { AuthController } from "@template/backend";
import { RouteObject } from "../routeObject";

export const user = {
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
