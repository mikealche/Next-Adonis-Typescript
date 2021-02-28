/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/auth" />
import { RouteObject } from "../routeObject";
export interface AuthInterface {
    email: string;
    password: string;
}
export declare const user: {
    me: RouteObject<void, ({ auth }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<import("@template/backend/build/app/Models/User").default>>;
    signup: RouteObject<AuthInterface, ({ auth, request, }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<{
        type: "bearer";
        token: string;
        expires_at?: string | undefined;
        expires_in?: number | undefined;
    }>>;
    login: RouteObject<AuthInterface, ({ auth, request, }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<{
        type: "bearer";
        token: string;
        expires_at?: string | undefined;
        expires_in?: number | undefined;
    }>>;
};
