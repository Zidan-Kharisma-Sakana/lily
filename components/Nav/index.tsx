/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useAuth } from "../../context/auth";
import { scrollKe } from "../helper";
import styles from "./Nav.module.css";
import { ProfileButton } from "./ProfileButton";
import { SideMenu } from "./SideMenu";

export const Nav: FC<{
  isHome?: boolean;
  withBackButton?: boolean;
  onBack?: () => void;
}> = ({ isHome = true, withBackButton = false, onBack }) => {
  const [open, setOpen] = useState<boolean>(false);
  function close() {
    setOpen(false);
  }
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div id="nav" className={styles.nav}>
      {!!isHome && (
        <nav className="z-30 absolute items-stretch sm:items-center top-0 left-0 w-full px-4 py-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] flex justify-between">
          <NavContent isHome={isHome} setOpenModal={setOpen} />
        </nav>
      )}
      <div className="fixed top-0 left-0 w-full z-[25]">
        <nav className="z-20 bg-[#091A76] items-stretch sm:items-center w-full px-4 py-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] flex justify-between">
          <NavContent isHome={isHome} setOpenModal={setOpen} />
        </nav>{" "}
        {withBackButton && (
          <div className="bg-white w-full py-3 pl-4 md:hidden">
            <img
              onClick={() => (!!onBack ? onBack() : router.back())}
              src="/icons/arrow-left.svg"
              alt=""
              className="mb-2 md:hidden w-8 h-8"
            />
          </div>
        )}
      </div>
      <SideMenu isHome={isHome} open={open} close={close} isLoggedIn={false} />
    </div>
  );
};

const NavContent: FC<{
  setOpenModal: React.Dispatch<boolean>;
  isHome?: boolean;
}> = ({ setOpenModal, isHome = false }) => {
  const r = useRouter();
  return (
    <>
      <img
        onClick={() => {
          if (!isHome) r.push("/#home");
          else scrollKe("home");
        }}
        className="w-[150px] h-[29px] md:w-[189px] md:h-[36px] cursor-pointer"
        src="/images/leadseries_logo_putih.png"
        alt="logo"
      />
      <img
        onClick={() => setOpenModal(true)}
        src="/icons/menu.svg"
        alt=""
        className="sm:hidden px-2 cursor-pointer"
      />
      <div className="text-white hidden sm:flex font-bold text-sm gap-x-4 md:gap-x-6 lg:gap-x-9 xl:gap-x-12">
        <h3
          onClick={() => {
            if (!isHome) r.push("/#home");
            else scrollKe("home");
          }}
          className="flex items-center cursor-pointer"
        >
          Home
        </h3>
        <h3
          onClick={() => {
            if (!isHome) r.push("/#about");
            else scrollKe("about");
          }}
          className="flex items-center cursor-pointer"
        >
          About Us
        </h3>
        <h3
          onClick={() => {
            if (!isHome) r.push("/#event");
            else scrollKe("event");
          }}
          className="flex items-center cursor-pointer"
        >
          Events
        </h3>
        <h3
          onClick={() => {
            if (!isHome) r.push("/#faq");
            else scrollKe("faq");
          }}
          className="flex items-center cursor-pointer"
        >
          FAQs
        </h3>
        <ProfileButton />
      </div>
    </>
  );
};
