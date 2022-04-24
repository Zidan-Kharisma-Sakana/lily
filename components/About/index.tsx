/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { SectionTitle } from "../SectionTitle";
import styles from "./About.module.css";
import { StatCard } from "./StatCard";
export const About: FC = () => {
  return (
    <section className="min-h-screen">
      <div className={styles.about}>
        <div
          id="about"
          className="flex items-center w-full font-bold text-black mb-4 text-[32px]"
        >
          <h3>What is </h3>
          <img src="/images/leadseries_logo_hitam.jpg" alt="leadseries" />
          <h3>?</h3>
        </div>
        <div className="flex justify-between items-end pt-10">
          <div className="text-lg w-1/2">
            <p>
              LeadSeries 2022 is a virtual event that consists of pre-event such
              as Global Ambassador, main events such as Job Fair, Virtual
              Company Visit, Workshop, Competition, Conference, and Talkshow
              sequentially from May until July.
            </p>
            <p className="mt-4">
              This event aims to bring insights and practical knowledge for
              youth to develop their leadership and help them prepare for their
              future career while also contributing to the Sustainable
              Development Goals.
            </p>
          </div>
          <div className="w-2/5 flex relative ">
            <img
              src="/images/about_image.png"
              alt="about"
              className="relative z-10"
            />
            <img
              src="/images/about_image.png"
              alt="about"
              className="absolute right-0 top-0 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
      <div className="my-28">
        <SectionTitle
          right="in Number"
          sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec sem sed."
        />
        <div className="flex justify-between items-center mt-8">
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
          />
        </div>
      </div>
    </section>
  );
};
