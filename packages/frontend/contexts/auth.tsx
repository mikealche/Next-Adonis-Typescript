import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { authenticateAPI, routes, APIType } from "@template/shared";
import { useRouter } from "next/router";

type User = APIType<typeof routes["me"]["request"]>["data"];

const AuthContext = React.createContext(
  {} as {
    user: User;
    setToken: (newToken: string) => void;
    logout: () => void;
    isLoading: boolean;
  }
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) return setIsLoading(false);
    console.log("running", { token });
    authenticateAPI(token);
    routes.me
      .request()
      .then(({ data: user }) => {
        setUser(user);
        Cookies.set("token", token);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log({ err });
        authenticateAPI(null);
        Cookies.remove("token");
        setIsLoading(false);
      });
  }, [token]);

  useEffect(() => {
    setToken(Cookies.get("token"));
    setIsLoading(true);
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setToken(null);
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, setToken, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
