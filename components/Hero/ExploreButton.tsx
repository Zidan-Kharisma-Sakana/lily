/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { scrollKe } from "../helper";

export const ExploreButton: FC = () => {
  return (
    <div className="flex my-4">
      <button
      onClick={()=>scrollKe("about")}
        style={{ border: "1px solid #FAEDF7", borderRadius: "48px" }}
        className="py-4 pl-8 pr-4 flex items-start"
      >
        <h6 className="font-medium">Explore</h6>
        <img src="/icons/arrow_down.svg" alt="arrow_down" className="ml-6" />
      </button>
    </div>
  );
};
