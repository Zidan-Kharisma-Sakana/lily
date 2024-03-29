import Cookies from "js-cookie";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { baseURLFE } from "../utils/api";

const createAccount = async (
  q: string,
  query: any
): Promise<boolean | string> => {
  toast.loading("Please wait a moment...");
  const url = baseURLFE("auth/o/google-oauth2/" + q);
  const res = await fetch(url, {
    method: "POST",
    credentials: "include",
  });
  toast.dismiss();
  const data = await res.json();
  if (res.ok) {
    console.log(data);
    Cookies.set("token", data.access);
    toast.success("Success");
    return true;
  }
  for (var key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((detail: any) => toast.error(`${key}: ${detail}`));
    } else {
      toast.error(data[key]);
    }
  }
  return false;
};

const ProcessGoogle: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const signup = async (router: NextRouter) => {
      const url = router.asPath;
      if (await createAccount(url.substring(url.indexOf("?")), router.query)) {
        location.replace("/?onboard=true");
      }
    };

    if (!!router.query["state"]) {
      signup(router);
    }
  }, [router]);
  return <div></div>;
};
export default ProcessGoogle;
