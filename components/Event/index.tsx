import { FC, useState } from "react";
import { SectionTitle } from "../SectionTitle";
import { EventCard, EventCardProps } from "./EventCard";
import { LeadCompModal } from "./LeadCompModal";

export const Event: FC<{openLeadComp: ()=>void}> = ({openLeadComp}) => {
  return (
    <>

      <section id="event" className="mt-8 md:mt-16 lg:mt-28">
        <SectionTitle
          left="Event on "
          sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec sem sed"
        />
      </section>
      <div className="hidescrollbar relative mb-8 md:mb-16 lg:mb-28 mt-8 scroll md:h-[530px] md:w-screen md:overflow-x-scroll">
        <div className="mt-4 md:mt-8 md:flex md:absolute top-0 left-0">
          {data.map((e, idx) => (
            <EventCard key={idx} {...e as EventCardProps} openLeadComp={openLeadComp} />
          ))}
          <div className="md:w-[200px]"></div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    title: "Global Ambassador",
    date: "20 May 2022",
    description:
      "Pre-Event consists of Global Ambassadors and Day in the Life at Creative Space, which aims to introduce youths around the globe about the working culture in several companies in Indonesia.",
    status: "CLOSED",
  },
  {
    title: "Day in the Life at XX",
    date: "27 May 2022",
    description:
      "Pre-Event consists of Global Ambassadors and Day in the Life at Creative Space, which aims to introduce youths around the globe about the working culture in several companies in Indonesia.",
    status: "REGISTRATION",
  },
  {
    title: "LeadComp",
    date: "18 May - 25 June 2022",
    description:
      "	LeadComp is an Initiative SDG Competition that aims to accelerate youth’s innovation towards the creation of sustainable economic growth. This event will focus on SDGs No 8 and 9, while using Smart City as the handy innovation to achieve a greater state.",
    status: "LEARN_MORE",
  },
  {
    title: "Job Fair",
    date: "23 June - 3 July 2022",
    description:
      "In order to optimally facilitate the needs of our partner companies, we are going to provide a virtual job fair as an interactive tool for talents across Indonesia. This virtual job fair will increase our company partners’ employer branding by making a personalized booth and making them able to collect talents’ databases.",
    status: "REGISTRATION",
  },
  {
    title: "Virtual Company Visit",
    date: "25 & 26 June 2022",
    description:
      "A session where companies give our participants a glimpse of what it is like working in those respective companies. The session could be modified to the needs of our partner.",
    status: "COMING_SOON",
  },
  {
    title: "Workshop",
    date: "30 June 2022",
    description:
      "An interactive workshop session where youths can discuss, share thoughts, and do practical work on a specific subject with a group of people from different backgrounds.",
    status: "COMING_SOON",
  },
  {
    title: "LeadTalk",
    date: "2 & 3 July 2022",
    description:
      "For the peak of our event, we are bringing an exclusive talkshow that is filled with impactful speakers from national and international levels for two days. The talkshows are designed specifically for youths who are interested in developing their career in startups, consulting, and finance.",
    status: "COMING_SOON",
  },
];
