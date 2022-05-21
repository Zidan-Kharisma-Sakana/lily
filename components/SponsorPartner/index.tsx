/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { SectionTitle } from "../SectionTitle";

export const SponsorPartner: FC = () => {
  return (
    <>
      <section className="flex flex-col justify-center mt-4 items-center">
        <SectionTitle right=" Sponsors" />
        <img className="my-4" src="/images/sponsor.png" alt="sponsor" />
      </section>
      <section className="flex justify-center mt-4 gap-x-9 items-center">
        <div>
          <p className="text-sm sm:text-lg ms:text-xl lg:text-2xl xl:text-[27px] text-center font-bold">
            Annual Partner
          </p>
          <img
            className="my-4"
            src="/images/annual_partner.png"
            alt="partners"
          />
        </div>
        <div>
          <p className="text-sm sm:text-lg ms:text-xl lg:text-2xl xl:text-[27px] text-center font-bold">
            Community Partner
          </p>
          <img
            className="my-4"
            src="/images/community_partner.png"
            alt="partners"
          />
        </div>
      </section>
    </>
  );
};
