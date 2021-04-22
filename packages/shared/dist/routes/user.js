"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var routeObject_1 = require("../routeObject");
exports.user = {
    me: new routeObject_1.RouteObject({
        method: "get",
        route: "/auth/me",
        controller: "AuthController.me",
    }),
    signup: new routeObject_1.RouteObject({
        method: "post",
        route: "/auth/signup",
        controller: "AuthController.signup",
    }),
    login: new routeObject_1.RouteObject({
        method: "post",
        route: "/auth/login",
        controller: "AuthController.login",
    }),
};
