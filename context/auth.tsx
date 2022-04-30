import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FC,
} from "react";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";
//api here is an axios instance which has the baseURL set according to the env.
import api from "../utils/api";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: (email: string, password: string) => Promise<any>;
}>({
  isAuthenticated: false,
  user: null,
  loading: false,
  login: async (email: string, password: string) => {},
  logout: async (email: string, password: string) => {},
});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.common = { Authorization: `Bearer ${token}` };
        const { data: user } = await api.get("auth/users/me");
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email: string, password: string) => {
    const { data: token } = await api.post("auth/jwt/create/", {
      crossDomain: true,
      email,
      password,
    });
    if (token) {
      console.log("Got token");
      Cookies.set("token", token, { expires: 60 });
      api.defaults.headers.common = { Authorization: `Bearer ${token}` };
      const { data: user } = await api.get("auth/users/me");
      setUser(user);
      console.log("Got user", user);
    }
  };

  const logout = async (email: string, password: string) => {
    Cookies.remove("token");
    setUser(null);
    api.defaults.headers.common = { Authorization: `` };
    window.location.pathname = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
