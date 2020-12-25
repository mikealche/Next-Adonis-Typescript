/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/auth" />
import { AxiosResponse } from "axios";
export declare const authenticateAPI: (token: string) => void;
export declare const unauthenticateAPI: () => void;
declare type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
export declare type APIType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
declare class RouteObject<ResponseType extends (...args: any) => any> {
    method: "get" | "post";
    route: string;
    handler: string;
    request(...args: any): Promise<AxiosResponse<APIType<ResponseType>>>;
    constructor(method: "get" | "post", route: string, handler: string);
}
export declare const routes: {
    me: RouteObject<({ auth, request }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<import("@template/backend/build/app/Models/User").default>>;
    signup: RouteObject<({ auth, request, }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<{
        type: "bearer";
        token: string;
        expires_at?: string | undefined;
        expires_in?: number | undefined;
    }>>;
    login: RouteObject<({ auth, request, }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<{
        type: "bearer";
        token: string;
        expires_at?: string | undefined;
        expires_in?: number | undefined;
    }>>;
};
export {};
