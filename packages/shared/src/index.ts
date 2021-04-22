export * from "./api";
import { user } from "./routes/user";
import { todo } from "./routes/todo";

export * from "./routeObject";

export const routes = {
  user,
  todo,
};
