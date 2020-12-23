import { AuthController } from "@template/backend";
import Axios from "axios";
type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

const routes = {
  user: {
    me: {
      route: "/me",
      method: "get",
      fetcher: Axios.get("/me") as ReturnType<AuthController["me"]>,
    },
  },
};

export const a = ["a", "b"];
