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
        className={`flex justify-center items-center w-full font-bold text-black mb-2 md:mb-4`}
      >
        <h3 className="sm:text-[20px] md:text-2xl lg:text-2xl xl:text-[27px]">{left}</h3>
        <img
          src="/images/leadseries_logo_putih_2.png"
          alt="leadseries"
          className="h-[16px] w-[98px] sm:h-[20px] sm:w-[130px] md:h-8 md:w-[176px] mx-0.5"
        />
        <h3 className="sm:text-[20px] md:text-2xl lg:text-2xl xl:text-[27px]">{right}</h3>
      </div>
      <p className="text-center">{sub}</p>
    </>
  );
};
