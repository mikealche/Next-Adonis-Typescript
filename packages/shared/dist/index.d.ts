/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/auth" />
export * from "./api";
export * from "./routeObject";
export declare const routes: {
    user: {
        me: import("./routeObject").RouteObject<void, ({ auth }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<import("@template/backend/build/app/Models/User").default>>;
        signup: import("./routeObject").RouteObject<import("./routes/user").AuthInterface, ({ auth, request, }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<{
            type: "bearer";
            token: string;
            expires_at?: string | undefined;
            expires_in?: number | undefined;
        }>>;
        login: import("./routeObject").RouteObject<import("./routes/user").AuthInterface, ({ auth, request, }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<{
            type: "bearer";
            token: string;
            expires_at?: string | undefined;
            expires_in?: number | undefined;
        }>>;
    };
    todo: {
        all: import("./routeObject").RouteObject<void, () => Promise<import("@template/backend/build/app/Models/Todo").default[]>>;
        own: import("./routeObject").RouteObject<void, ({ auth }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<import("@template/backend/build/app/Models/Todo").default[] | undefined>>;
        create: import("./routeObject").RouteObject<{
            text: string;
        }, ({ auth, request }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<import("@template/backend/build/app/Models/Todo").default | undefined>>;
        delete: import("./routeObject").RouteObject<{
            id: Number;
        }, ({ auth, request }: import("@ioc:Adonis/Core/HttpContext").HttpContextContract) => Promise<void>>;
    };
};
