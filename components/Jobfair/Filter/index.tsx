/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { FilterBody } from "./FilterBody";

export const Filter: FC = () => {
  return (
    <div
      style={{ background: "rgba(205, 207, 208, 0.25)" }}
      className="p-6 rounded-lg"
    >
      <FilterBody />
    </div>
  );
};
export const MobileFilter: FC<{ shown: boolean; close: () => void }> = ({
  shown,
  close,
}) => {
  return (
    <div
      className={`fixed left-0 top-0 overflow-auto h-[100vh] w-screen bg-white z-20 p-4 sm:p-8 transition-all ${
        shown ? "" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center font-bold text-lg my-8">
        <p>Filter</p>
        <img
          onClick={close}
          src="/icons/close-black.svg"
          alt=""
          className="w-4 h-4 cursor-pointer"
        />
      </div>
      <FilterBody />
    </div>
  );
};
