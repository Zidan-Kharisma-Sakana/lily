/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { scrollKe } from "../helper";

export const ExploreButton: FC = () => {
  return (
    <div className="flex my-4">
      <button
        onClick={() => scrollKe("about")}
        style={{ border: "1px solid #FAEDF7", borderRadius: "48px" }}
        className="py-4 pl-6 lg:pl-8 pr-4 flex items-center text-xs md:text-sm lg:text-base"
      >
        <h6 className="font-medium">Explore</h6>
        <img src="/icons/arrow_down.svg" alt="arrow_down" className="h-[18px] w-[18px] lg:h-6 lg:w-6 ml-6" />
      </button>
    </div>
  );
};
