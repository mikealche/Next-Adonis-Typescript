"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todo = void 0;
var routeObject_1 = require("../routeObject");
exports.todo = {
    all: new routeObject_1.RouteObject({
        method: "get",
        route: "/todos",
        controller: "TodosController.index",
        isProtected: true,
        requiredRoles: ["admin"],
    }),
};
