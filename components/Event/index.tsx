import { FC, useState } from "react";
import { SectionTitle } from "../SectionTitle";
import { EventCard, EventCardProps } from "./EventCard";

export const Event: FC<{
  openLeadComp: () => void;
  openLeadTalk: () => void;
}> = (props) => {
  return (
    <>
      <section id="event" className="mt-8 md:mt-16 lg:mt-28">
        <SectionTitle
          left="Event on "
          sub="We have a total of 7 events ranging from Pre-Event to Main Event, free for you to choose from!"
        />
      </section>
      <div className="mb-8 md:mb-16 lg:mb-28 mt-8 scroll md:h-[530px] w-full">
        <div className="mt-4 md:mt-8 md:flex w-full justify-evenly">
          <EventCard {...(data[0] as EventCardProps)} {...props} />
          <EventCard {...(data[1] as EventCardProps)} {...props} />
        </div>
      </div>
    </>
  );
};

const data = [
  {
    title: "LeadComp",
    date: "18 April - 25 June 2022",
    description:
      "	LeadComp is an Initiative SDG Competition that aims to accelerate youth’s innovation towards the creation of sustainable economic growth. This event will focus on SDGs No 8 and 9, while using Smart City as the handy innovation to achieve a greater state.",
    status: "LEADCOMP",
    url: "/images/leadcomp.jpg",
  },
  {
    title: "Main Event",
    date: "25 June - 15 July 2022",
    description:
      "We have a total of 7 main events such as LeadTalk, Job Fair, Global Ambassador, Day In the Life, Workshop, and Virtual Company Visit. By clicking the register button, you are registering for all LeadSeries’ main events. ",
    status: "LEADTALK",
    url: "/images/mainevent.jpg",
  },
];
