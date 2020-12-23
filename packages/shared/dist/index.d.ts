import { AuthController } from "@template/backend";
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
        request: ({ email, password, }: {
            email: string;
            password: string;
        }) => ReturnType<AuthController["me"]>;
        controllerName: string;
    };
};
export declare const a: string[];
