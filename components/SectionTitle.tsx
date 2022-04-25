/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const SectionTitle: FC<{
  left?: string;
  right?: string;
  sub?: string;
  row?: boolean;
}> = ({ left, right, sub, row }) => {
  return (
    <>
      <div
        className={`flex justify-center items-center w-full font-bold text-black text-[32px] ${
          !row ? "" : "flex-col sm:flex-row"
        }`}
      >
        <h3>{left}</h3>
        <img
          src="/images/leadseries_logo_hitam.jpg"
          alt="leadseries"
          className="mx-0.5"
        />
        <h3>{right}</h3>
      </div>
      <p className="text-center">{sub}</p>
    </>
  );
};
