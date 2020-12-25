import { AxiosResponse } from "axios";
export declare const authenticateAPI: (token: string) => void;
export declare const routes: {
    me: {
        route: string;
        method: string;
        request: () => Promise<AxiosResponse<import("@template/backend/build/app/Models/User").default>>;
        controllerName: string;
    };
    signup: {
        route: string;
        method: string;
        request: ({ email, password }: {
            email: string;
            password: string;
        }) => Promise<AxiosResponse<{
            type: "bearer";
            token: string;
            expires_at?: string | undefined;
            expires_in?: number | undefined;
        }>>;
        controllerName: string;
    };
};
