"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var axios_1 = __importDefault(require("axios"));
var api = axios_1.default.create({
    baseURL: "http://localhost:3333/",
});
var userRoutes = {
    me: {
        route: "/me",
        method: "get",
        request: function () { return axios_1.default.get("/me"); },
        controllerName: "AuthController.me",
    },
    signup: {
        route: "/signup",
        method: "post",
        request: function (_a) {
            var email = _a.email, password = _a.password;
            return api.post("signup", {
                email: email,
                password: password,
            });
        },
        controllerName: "AuthController.signup",
    },
};
exports.routes = __assign({}, userRoutes);
