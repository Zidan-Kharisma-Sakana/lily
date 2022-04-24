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
      <section className="flex flex-col justify-center mt-4 items-center">
        <SectionTitle right=" Community Partners" />
        <img className="my-4" src="/images/partner.png" alt="partners" />
      </section>
    </>
  );
};
