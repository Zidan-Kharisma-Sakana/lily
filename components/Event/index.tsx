import { FC } from "react";
import { SectionTitle } from "../SectionTitle";
import { EventCard, EventCardProps } from "./EventCard";

export const Event: FC = () => {
  return (
    <section className="my-28">
      <SectionTitle
        left="Event on "
        sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec sem sed"
      />
      <div className="mt-8">
        {data.map((e, idx) => (
          <EventCard key={idx} {...e} />
        ))}
      </div>
    </section>
  );
};

const data: EventCardProps[] = [
  {
    title: "Global Ambassador",
    date: "20 May 2022",
    description:
      "Pre-Event consists of Global Ambassadors and Day in the Life at Creative Space, which aims to introduce youths around the globe about the working culture in several companies in Indonesia.",
    isClosed: false,
  },
];
