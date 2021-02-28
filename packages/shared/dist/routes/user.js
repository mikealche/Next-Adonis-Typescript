"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var routeObject_1 = require("../routeObject");
exports.user = {
    me: new routeObject_1.RouteObject("get", "/auth/me", "AuthController.me"),
    signup: new routeObject_1.RouteObject("post", "/auth/signup", "AuthController.signup"),
    login: new routeObject_1.RouteObject("post", "/auth/login", "AuthController.login"),
};
