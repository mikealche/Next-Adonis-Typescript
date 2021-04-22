import { TodosController } from "@template/backend";
import { RouteObject } from "../routeObject";

export const todo = {
  all: new RouteObject<void, TodosController["index"]>({
    method: "get",
    route: "/todos",
    controller: "TodosController.index",
    isProtected: true,
    requiredRoles: ["admin"],
  }),
};
