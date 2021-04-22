import { AxiosResponse } from "axios";
import User from "@template/backend/build/app/Models/User";
declare type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
export declare type APIType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
export declare type APISuccessValue<T extends () => Promise<AxiosResponse>> = APIType<T>["data"];
declare type UserRoles = InstanceType<typeof User>["role"][];
declare type RouteObjectParams = {
    method: "get" | "post";
    route: string;
    controller: string;
    isProtected?: boolean;
    requiredRoles?: UserRoles;
};
export declare class RouteObject<RequestType extends any, ResponseType extends (...args: any) => any> {
    request(payload: RequestType): Promise<AxiosResponse<APIType<ResponseType>>>;
    method: "get" | "post";
    route: string;
    controller: string;
    isProtected?: boolean;
    requiredRoles?: UserRoles;
    constructor({ method, route, controller, isProtected, requiredRoles, }: RouteObjectParams);
}
export {};
