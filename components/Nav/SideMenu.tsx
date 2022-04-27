/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC } from "react";
import { scrollKe } from "../helper";

export const SideMenu: FC<{
  isLoggedIn: boolean;
  open: boolean;
  close: () => void;
}> = ({ open, close, isLoggedIn }) => {
  function to(id: string) {
    return () => {
      close();
      scrollKe(id);
    };
  }
  const r = useRouter()
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#091A76] w-[70%] fixed right-0 top-0 h-screen z-50 px-8 pt-20 transform transition-all ${
          open ? "" : "translate-x-full"
        }`}
      >
        <img
          onClick={close}
          src="/icons/close.svg"
          alt=""
          className="absolute top-12 right-8 cursor-pointer"
        />
        <img
          src="/images/leadseries_logo_putih.png"
          alt=""
          className="absolute left-8 bottom-20 w-[104px] h-[18px]"
        />
        <div className="text-medium text-white">
          <h4 onClick={to("about")} className="mb-6 cursor-pointer">
            About Us
          </h4>
          <h4 onClick={to("event")} className="mb-6 cursor-pointer">
            Events
          </h4>
          <h4 onClick={to("faq")} className="mb-6 cursor-pointer">
            FAQ
          </h4>
          <h4 onClick={to("footer-contact")} className="mb-6 cursor-pointer">
            Contact Us
          </h4>
        </div>
        <div className="w-12 bg-white h-0.5 rounded my-6" />
        <div className="font-bold text-xs text-white">
          {isLoggedIn ? (
            <>
              <h4 className="mb-6 cursor-pointer">Profile</h4>
              <h4 className="mb-6 cursor-pointer">Logout</h4>
            </>
          ) : (
            <h4 onClick={() =>r.push('/sign-in')} >Sign In</h4>
          )}
        </div>
      </div>
      {open && (
        <div
          onClick={close}
          className="bg-[rgba(0,0,0,0.5)] z-40 h-screen w-screen fixed top-0 left-0"
        />
      )}
    </>
  );
};
