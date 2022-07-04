import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FC,
} from "react";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { baseURLFE } from "../utils/api";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  registered: boolean;
  user: any;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
}>({
  isAuthenticated: false,
  registered: false,
  user: null,
  login: async (email: string, password: string) => {},
  logout: async () => {},
});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const [registered, setRegistered] = useState(false);
  const r = useRouter();

  const retrieveUser = async (token: string) => {
    const res = await fetch(baseURLFE("auth/users/me/"), {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data);
    } else {
      toast.error(data.detail ?? "Unknown Error", {
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        retrieveUser(token);
      }
    }
    loadUserFromCookies();
  }, []);

  const getRegistered = async () => {
    const token = Cookies.get("token");
    const res = await fetch(baseURLFE("api/profile/event/"), {
      headers: { Authorization: "Bearer " + token },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.length > 0) {
        setRegistered(true);
      }
    }
  };

  useEffect(() => {
    if (!!user) {
      getRegistered();
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // ganti pake fetch aja
    const t = toast.loading("Loading...");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.dismiss(t);
    const data = await res.json();
    if (res.ok) {
      Cookies.set("token", data.access, { expires: 3 });
      retrieveUser(data.access);
    } else {
      toast.error(data?.message ?? "No Active Account Found", {
        duration: 5000,
      });
    }
  };

  const logout = async () => {
    Cookies.remove("token");
    setUser(null);
    r.reload();
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout, registered }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
