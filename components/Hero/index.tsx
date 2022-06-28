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
        className="flex flex-col justify-center w-full h-full px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] 2xl:px-[200px] -translate-y-4"
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
        <Bubbles />
      </div>
    </div>
  );
};

const Flags = () => {
  return (
    <div className="w-3/4 md:w-full relative z-50">
      <p className="font-bold text-sm mb-4 xl:mb-5 2xl:mb-6">
        Partnering with International Organizations across
      </p>
      <div className="grid grid-cols-4 2xl:grid-cols-7 gap-x-6 gap-y-4 absolute left-0 top-full lg:top-3/4 xl:top-1/2">
        <img className="sm:max-w-[80px] lg:max-w-[100px]" src="/images/flag/australia.png" alt="australia" />
        <img className="sm:max-w-[80px] lg:max-w-[100px]" src="/images/flag/malaysia.png" alt="malaysia" />
        <img className="sm:max-w-[80px] lg:max-w-[100px]" src="/images/flag/netherlands.png" alt="netherlands" />
        <img className="sm:max-w-[80px] lg:max-w-[100px]" src="/images/flag/philippines.png" alt="philippines" />
        <img className="sm:max-w-[80px] lg:max-w-[100px]" src="/images/flag/singapore.png" alt="singapore" />
        <img className="sm:max-w-[80px] lg:max-w-[100px]" src="/images/flag/south-korea.png" alt="south-korea" />
        <img className="sm:max-w-[80px] lg:max-w-[100px]" src="/images/flag/thailand.png" alt="thailandu" />
      </div>
    </div>
  );
};
