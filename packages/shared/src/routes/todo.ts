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

  own: new RouteObject<void, TodosController["own"]>({
    method: "get",
    route: "/own-todos",
    controller: "TodosController.own",
    isProtected: true,
  }),
  create: new RouteObject<{ text: string }, TodosController["create"]>({
    method: "post",
    route: "/todos/create",
    controller: "TodosController.create",
    isProtected: true,
  }),
  delete: new RouteObject<{ id: Number }, TodosController["delete"]>({
    method: "post",
    route: "/todos/delete",
    controller: "TodosController.delete",
    isProtected: true,
  }),
};
