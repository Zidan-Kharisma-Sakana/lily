/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { scrollKe } from "../helper";
import styles from "./Nav.module.css";
import { SideMenu } from "./SideMenu";
export const Nav: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  function close() {
    setOpen(false);
  }
  return (
    <div id="nav" className={styles.nav}>
      <nav className="z-30 absolute items-stretch sm:items-center top-0 left-0 w-full px-4 py-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] flex justify-between">
        <NavContent setOpenModal={setOpen} />
      </nav>
      <nav className="z-20 bg-[#091A76] items-stretch sm:items-center fixed top-0 left-0 w-full px-4 py-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] flex justify-between">
        <NavContent setOpenModal={setOpen} />
      </nav>
      <SideMenu open={open} close={close} isLoggedIn />
    </div>
  );
};

const NavContent: FC<{ setOpenModal: React.Dispatch<boolean> }> = ({
  setOpenModal,
}) => {
  return (
    <>
      <img
        className="w-[150px] h-[29px] md:w-[189px] md:h-[36px]"
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
          onClick={() => scrollKe("home")}
          className="flex items-center cursor-pointer"
        >
          Home
        </h3>
        <h3
          onClick={() => scrollKe("about")}
          className="flex items-center cursor-pointer"
        >
          About Us
        </h3>
        <h3
          onClick={() => scrollKe("event")}
          className="flex items-center cursor-pointer"
        >
          Events
        </h3>
        <h3
          onClick={() => scrollKe("faq")}
          className="flex items-center cursor-pointer"
        >
          FAQs
        </h3>
        <button className="py-2 px-4 lg:py-4 lg:px-8 text-[#3C1856] rounded-[48px] bg-[#E9C1E4] cursor-pointer">
          Sign In
        </button>
      </div>
    </>
  );
};
