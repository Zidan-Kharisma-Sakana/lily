/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-white text-xs py-8 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 px-4 sm:py-10 sm:px-10 md:px-14  lg:px-28  lg:pt-10 lg:pb-12 xl:px-[121px] xl:pt-12 xl:pb-16">
      <section id="footer-logo" className="font-medium text-xs">
        <img
          src="/images/footer_logo.png"
          alt="aiesec"
          className="max-w-[120px] sm:max-w-[180px] md:w-full lg:w-auto lg:max-w-[100%] xl::max-w-[120px] md:max-w-none"
        />
        <p>Gedung Pusbintakwa Lantai 1 ruang B113,</p>
        <p>Universitas Indonesia</p>
      </section>
      <section id="footer-events" className="hidden md:block">
        <h6 className="font-bold mb-2">Events</h6>
        <ul className="grid grid-cols-1 gap-y-1 cursor-pointer">
          <li>Global Ambassador</li>
          <li>Day In the Life at XX</li>
          <li>LeadComp</li>
          <li>Job Fair</li>
          <li>Virtual Company Visit</li>
          <li>Workshop</li>
          <li>LeadTalk</li>
        </ul>
      </section>
      <section id="footer-contact">
        <h6 className="font-bold mb-2">Contact Us</h6>
        <div className="flex">
          <img className="mr-4 cursor-pointer" src="/icons/mail.svg" alt="" />
          <img
            className="mr-4 cursor-pointer"
            src="/icons/instagram.svg"
            alt=""
          />
          <img className="mr-4 cursor-pointer" src="/icons/line.svg" alt="" />
        </div>
      </section>
    </footer>
  );
};
