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

const AuthContext = createContext<{
  isAuthenticated: boolean;
  user: any;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
}>({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {},
  logout: async () => {},
});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const r = useRouter();
  const retrieveUser = async (token: string) => {
    const res = await fetch("api/getUser", {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data);
      r.push("/");
    } else {
      toast.error(data.message ?? "Unknown Error", {
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
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
