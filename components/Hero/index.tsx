/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./Hero.module.css";
import { Bubbles } from "./Bubble";
import { ExploreButton } from "./ExploreButton";

export const Hero: FC = () => {
  return (
    <div className={styles.hero}>
      <div
        id="hero-content"
        className="flex flex-col justify-center w-full h-full pl-[123px] -translate-y-4"
      >
        <div className="flex items-center">
          <img src="/icons/rocket.png" alt="rocket" />
          <h3 className={styles.upcoming}>Upcoming New event 2022</h3>
        </div>
        <div className={styles.title}>
          <div className="flex">
            <h1>The Newest</h1>
            <img
              src="/images/leadseries_logo_putih.png"
              alt="leadseries"
              className="-ml-2 z-50"
            />
          </div>
          <h1>Has Arrived!</h1>
        </div>
          <h4 className="font-medium text-justify text-xl md:text-2xl w-1/3 md:w-2/5 xl:w-1/2 xl:min-w-[680px] leading-10">
            A virtual event that aims to bring insights and practical knowledge
            for youth to develop their leadership.
          </h4>
          <ExploreButton />
      </div>
      <Bubbles />
    </div>
  );
};
