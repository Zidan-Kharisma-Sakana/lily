/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useAuth } from "../../context/auth";

export const ProfileButton: FC = () => {
  const [onHover, setHover] = useState(false);
  const { user, logout } = useAuth();
  const r = useRouter();
  if (!user)
    return (
      <>
        <h4
          onClick={() => r.push("/sign-in")}
          className="mb-6 cursor-pointer md:hidden"
        >
          Sign In
        </h4>
        <button
          onClick={() => r.push("/sign-in")}
          className="hidden md:block  px-4 py-2 lg:py-3 xl:py-4 lg:px-8 text-[#3C1856] rounded-[48px] bg-[#E9C1E4] cursor-pointer"
        >
          Sign In
        </button>
      </>
    );
  return (
    <>
      <h4
        onClick={() => r.push("/dashboard")}
        className="mb-6 cursor-pointer md:hidden"
      >
        Dashboard
      </h4>
      <h4 onClick={logout} className="mb-6 cursor-pointer md:hidden">
        Logout
      </h4>

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="text-white hover:text-[#E9C1E4] gap-x-2 relative items-center hidden md:flex"
      >
        <h4>Hi, {getFirstName(user.full_name)}</h4>
        <img src="/icons/arrow_faq.svg" alt="" className="w-3 h-2" />
        <div
          className={`overflow-hidden w-[170px] absolute top-full right-0 z-50  ${
            onHover ? "h-auto pt-4" : "h-0"
          }`}
        >
          <div className="h-1"></div>
          <div
            onClick={() => r.push("/dashboard")}
            className="rounded-t-lg bg-[#3C1856] opacity-95 p-4 text-white"
          >
            <div></div>
            <div className="flex gap-x-4 cursor-pointer font-medium">
              <img src="/icons/user.svg" alt="" />
              <p>Dashboard</p>
            </div>
          </div>
          <div
            onClick={logout}
            className="rounded-b-lg bg-[#3C1856] opacity-95 p-4 text-white"
          >
            <div></div>
            <div className="flex gap-x-4 cursor-pointer font-medium">
              <img src="/icons/logout.svg" alt="" />
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export function getFirstName(name: string) {
  return name.split(" ")[0];
}

export function getLastName(name: string) {
  return name.split(" ").reduce((acc, current, idx) => {
    if (idx != 1) return `${acc} ${current}`;
    else return current;
  });
}
