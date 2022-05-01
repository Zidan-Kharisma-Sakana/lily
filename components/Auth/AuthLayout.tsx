/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC } from "react";
import { AuthDec } from "./AuthDec";

export const AuthLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const r = useRouter();
  return (
    <main
      style={{
        maxWidth: "100vw",
        background:
          "linear-gradient(219.99deg, #292874 8.29%, #E64E40 96.57%), #FFFFFF",
      }}
      className="relative min-h-screen overflow-hidden flex justify-center items-center md:py-28"
    >
      <img
        onClick={() => r.push("/")}
        style={{ zIndex: 200 }}
        src="/images/leadseries_logo_putih.png"
        alt=""
        className="hidden md:block w-[230px] h-[38px] absolute top-12 left-12 cursor-pointer"
      />
      <img
        onClick={() => r.push("/")}
        style={{ zIndex: 200 }}
        src="/images/leadseries_logo_hitam.jpg"
        alt=""
        className="md:hidden w-[110px] h-[20px] transform absolute top-12 left-4 sm:left-12"
      />
      <AuthDec />
      {children}
    </main>
  );
};
export const AuthBox: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="text-base w-full min-h-screen px-4 md:min-h-0 md:w-auto md:h-auto font-medium relative z-50 md:rounded-[30px] sm:px-12 sm:py-8 lg:px-16 lg:py-12 xl:px-20 xl:py-16 bg-white">
      {children}
    </div>
  );
};
