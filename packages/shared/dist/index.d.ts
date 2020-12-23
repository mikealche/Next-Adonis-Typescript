import { AuthController } from "@template/backend";
import { AxiosResponse } from "axios";
export declare const routes: {
    me: {
        route: string;
        method: string;
        request: () => ReturnType<AuthController["me"]>;
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
