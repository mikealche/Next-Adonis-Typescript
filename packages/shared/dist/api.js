"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthenticateAPI = exports.authenticateAPI = exports.api = void 0;
var axios_1 = __importDefault(require("axios"));
var isProduction = process.env.NODE_ENV === "production";
exports.api = axios_1.default.create({
    baseURL: isProduction
        ? process.env.NEXT_PUBLIC_BACKEND_URL
        : "http://localhost:3333/",
});
var authInterceptorID;
var authenticateAPI = function (token) {
    authInterceptorID = exports.api.interceptors.request.use(function (config) {
        config.headers.authorization = "bearer " + token;
        return config;
    });
};
exports.authenticateAPI = authenticateAPI;
var unauthenticateAPI = function () {
    exports.api.interceptors.request.eject(authInterceptorID);
};
exports.unauthenticateAPI = unauthenticateAPI;
