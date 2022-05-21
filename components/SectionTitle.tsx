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
        className={`flex justify-center items-center w-full font-bold text-black `}
      >
        <h3 className="text-sm sm:text-lg ms:text-xl lg:text-2xl xl:text-[27px]">{left}</h3>
        <img
          src="/images/leadseries_logo_putih_2.png"
          alt="leadseries"
          className="h-[18px] w-[98px] sm:h-[24px] sm:w-[130px] md:h-8 md:w-[176px] mx-0.5"
        />
        <h3 className="text-sm sm:text-lg ms:text-xl lg:text-2xl xl:text-[27px]">{right}</h3>
      </div>
      <p className="text-center">{sub}</p>
    </>
  );
};
