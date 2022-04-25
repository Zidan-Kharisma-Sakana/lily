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
      className={`flex items-center mx-auto w-3/4 md:w-full md:justify-center ${
        isLast ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div
        style={{
          background: "rgba(23, 23, 23, 0.12)",
          backdropFilter: "blur(4px)",
        }}
        className="rounded-2xl h-20 w-20 xl:h-[90px] xl:w-[90px] flex justify-center items-center"
      >
        <img src={url} alt="stat" />
      </div>
      <div className="font-bold ml-4">
        <h6 className="text-2xl xl:text-3xl">{num}+</h6>
        <p className="md:hidden text-xl xl:text-2xl">{title} {title2}</p>
        <p className="hidden md:block text-xl xl:text-2xl">{title}</p>
        <p className="hidden md:block text-xl xl:text-2xl">{title2}</p>
      </div>
    </div>
  );
};
