import Axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

export const api = Axios.create({
  baseURL: isProduction
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : "http://localhost:3333/",
});

let authInterceptorID: number;
export const authenticateAPI = (token: string) => {
  authInterceptorID = api.interceptors.request.use((config) => {
    config.headers.authorization = `bearer ${token}`;
    return config;
  });
};

export const unauthenticateAPI = () => {
  api.interceptors.request.eject(authInterceptorID);
};
