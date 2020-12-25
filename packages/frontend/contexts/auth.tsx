import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  authenticateAPI,
  unauthenticateAPI,
  routes,
  APIType,
} from "@template/shared";
import { useRouter } from "next/router";

type User = APIType<typeof routes["me"]["request"]>["data"];

const AuthContext = React.createContext(
  {} as {
    user: User;
    authenticate: (newToken: string) => void;
    logout: () => void;
    isLoading: boolean;
  }
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
    Cookies.remove("token");
    unauthenticateAPI();
    setUser(null);
    setIsLoading(false);
    router.push("/");
  };

  const authenticate = async (token) => {
    setIsLoading(true);
    authenticateAPI(token);
    try {
      const { data: user } = await routes.me.request();
      setUser(user);
      Cookies.set("token", token);
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      unauthenticateAPI();
      setUser(false);
      Cookies.remove("token");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) return setIsLoading(false);
    authenticate(token);
  }, []);

  return (
    <AuthContext.Provider value={{ user, authenticate, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
