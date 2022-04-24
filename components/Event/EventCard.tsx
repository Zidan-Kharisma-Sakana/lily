/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./Event.module.css";

export interface EventCardProps {
  url?: string;
  title: string;
  date: string;
  description: string;
  isClosed: boolean;
}
export const EventCard: FC<EventCardProps> = (props) => {
  return (
    <div className={styles.eventcard}>
      <div className="relative w-full h-full">
        <img
          src={props.url ?? "/images/event_default.jpg"}
          alt="event"
          className="mb-4"
        />
        <h6 className="font-bold text-[#724182] text-lg">{props.title}</h6>
        <div className="flex gap-x-2 my-2">
          <img src="/icons/calendar.svg" alt="cal" />{" "}
          <p className="font-bold text-black text-xs">{props.date}</p>
        </div>
        <p className="text-sm text-justify">{props.description}</p>
        <div className="bg-[#FAEDF7] py-4 rounded-[48px] flex justify-center items-center w-full absolute bottom-0 left-0">
          <h6 className="text-[#724182]">Register Here</h6>
        </div>
      </div>
    </div>
  );
};
