import { AxiosResponse } from "axios";
declare type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
export declare type APIType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
export declare type APISuccessValue<T extends () => Promise<AxiosResponse>> = APIType<T>["data"];
export declare class RouteObject<RequestType extends any, ResponseType extends (...args: any) => any> {
    method: "get" | "post";
    route: string;
    handler: string;
    request(payload: RequestType): Promise<AxiosResponse<APIType<ResponseType>>>;
    constructor(method: "get" | "post", route: string, handler: string);
}
export {};
