/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { SectionTitle } from "../SectionTitle";
import styles from "./About.module.css";
import { StatCard } from "./StatCard";
export const About: FC = () => {
  return (
    <section className="">
      <div className={styles.about}>
        <div
          id="about"
          className="md:mt-10 flex mb-4 xl:mb-0 justify-center xl:justify-start items-center w-full font-bold text-black text-[32px]"
        >
          <h3>What is </h3>
          <img src="/images/leadseries_logo_hitam.jpg" alt="leadseries" />
          <h3>?</h3>
        </div>
        <div className="flex flex-col-reverse xl:flex-row justify-between items-end relative mt-4">
          <div className="text-lg mt-4 xl:mt-0 w-full xl:w-1/2 xl:min-h-[216px]">
            <p>
              LeadSeries 2022 is a virtual event that consists of pre-event such
              as Global Ambassador, main events such as Job Fair, Virtual
              Company Visit, Workshop, Competition, Conference, and Talkshow
              sequentially from May until July.
            </p>
            <p className="mt-4 ">
              This event aims to bring insights and practical knowledge for
              youth to develop their leadership and help them prepare for their
              future career while also contributing to the Sustainable
              Development Goals.
            </p>
          </div>
          <div className="w-full mx-auto sm:w-3/4 md:w-1/2  flex flex-row-reverse xl:absolute bottom-0 right-0 rounded-2xl 2xl:static">
            <img
              src="/images/about.png"
              alt="about"
              className="relative z-10 w-full xl:w-11/12 rounded-2xl max-w-[550px]"
            />
          </div>
        </div>
      </div>
      <div className="my-8 md:my-16 lg:my-28">
        <SectionTitle
          right="in Number"
          row
          sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec sem sed."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-between items-center mt-8">
          <StatCard url="/icons/people.svg" num={7000} title="Participants" />
          <StatCard
            url="/icons/briefcase.svg"
            num={15}
            title="Partner"
            title2="Companies"
          />
          <StatCard
            url="/icons/world.svg"
            num={5}
            title="International"
            title2="Partner"
            isLast
          />
        </div>
      </div>
    </section>
  );
};
