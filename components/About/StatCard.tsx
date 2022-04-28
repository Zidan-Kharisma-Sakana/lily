/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./About.module.css";
export const StatCard: FC<{
  url: string;
  num: number;
  title: string;
  title2?: string;
  isLast?: boolean;
}> = ({ url, num, title, title2, isLast }) => {
  return (
    <div
      className={`flex items-center justify-center mx-auto w-3/4 md:w-full md:justify-center ${
        isLast ? "w-full md:w-1/3" : "w-1/2 md:w-1/3"
      }`}
    >
      <div
        style={{
          background: "rgba(23, 23, 23, 0.12)",
          backdropFilter: "blur(4px)",
        }}
        className="rounded-2xl min-w-[140px] md:min-w-0 h-full md:py-4 py-1 px-2 md:px-5 flex justify-center items-center"
      >
        <img
          src={url}
          alt="stat"
          className="h-6 w-6 md:h-12 md:w-12 lg:w-14 lg:h-14"
        />
        <div className="md:hidden font-bold ml-2">
          <h6 className="text-sm">{num}+</h6>
          <p className="text-sm">{title}</p>
          <p className="text-sm">{title2}</p>
        </div>
      </div>
      <div className="hidden md:block font-bold ml-4">
        <h6 className="text-2xl xl:text-3xl">{num}+</h6>
        <p className="md:hidden text-xl xl:text-2xl">
          {title} {title2}
        </p>
        <p className="hidden md:block text-xl xl:text-2xl">{title}</p>
        <p className="hidden md:block text-xl xl:text-2xl">{title2}</p>
      </div>
    </div>
  );
};
