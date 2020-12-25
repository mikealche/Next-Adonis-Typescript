import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { authenticateAPI, routes, APIType } from "@template/shared";

type User = APIType<typeof routes["me"]["request"]>["data"];

const AuthContext = React.createContext(
  {} as { user: User; setToken: (newToken: string) => void }
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  let token = Cookies.get("token");

  useEffect(() => {
    authenticateAPI(token);
    console.log({ token });
    routes.me
      .request()
      .then(({ data: user }) => {
        setUser(user);
      })
      .catch((err) => {
        console.log({ err });
        authenticateAPI(null);
        Cookies.set("token", null);
      });
  }, [token]);

  const setToken = (newToken: string) => {
    token = newToken;
  };
  return (
    <AuthContext.Provider value={{ user, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
