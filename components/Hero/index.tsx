/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./Hero.module.css";
import { Bubbles } from "./Bubble";
import { ExploreButton } from "./ExploreButton";

export const Hero: FC = () => {
  return (
    <div id="home" className={styles.hero}>
      <div
        id="hero-content"
        className="flex flex-col justify-center w-full h-full px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] -translate-y-4"
      >
        <div className="flex items-center">
          <img
            src="/icons/rocket.png"
            alt="rocket"
            className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-auto xl:h-auto"
          />
          <h3 className={styles.upcoming}>Upcoming New event 2022</h3>
        </div>
        <div className={styles.title}>
          <div className="flex items-center">
            <h1>The Newest</h1>
            <img
              src="/images/leadseries_logo_putih.png"
              alt="leadseries"
              className="h-[28px] md:h-[48px] lg:h-auto lg:-ml-2 lg:z-30"
            />
          </div>
          <h1>Has Arrived!</h1>
        </div>
        <h4 className="pl-1.5 mt-1 font-medium text-justify text-sm sm:text-lg md:text-xl lg:text-2xl w-3/4 sm:w-4/5 md:w-3/5 xl:w-1/2 xl:min-w-[680px] lg:leading-10">
          A virtual event that aims to bring insights and practical knowledge
          for youth to develop their leadership.
        </h4>
        <ExploreButton />
        <Flags />
      </div>
      <Bubbles />
    </div>
  );
};

const Flags = () => {
  return (
    <div className="w-3/4 md:w-full relative z-30">
      <p className="font-bold text-sm mb-4 xl:mb-5 2xl:mb-6">
        Partnering with International Organizations across
      </p>
      <div className="flex gap-x-6 gap-y-4 flex-wrap absolute left-0 top-full">
        <img src="/images/SG.jpg" alt="" />
        <img src="/images/SK.jpg" alt="" />
        <img src="/images/PHP.jpg" alt="" />
        <img src="/images/MLY.jpg" alt="" />
        <img src="/images/AUS.jpg" alt="" />
      </div>
    </div>
  );
};
