/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import styles from "./Event.module.css";

export interface EventCardProps {
  url?: string;
  title: string;
  date: string;
  description: string;
  status: "CLOSED" | "REGISTRATION" | "COMING_SOON" | "LEADCOMP" | "LEADTALK";
  openLeadComp: () => void;
  openLeadTalk: () => void;
  registerMainEvent: () => void;
}
export const EventCard: FC<EventCardProps> = (props) => {
  return (
    <div className={styles.eventcard}>
      <div className="relative w-full h-full flex flex-col justify-between">
        <div>
          <img
            src={props.url ?? "/images/event_default.jpg"}
            alt="event"
            className="hidden md:block mb-4 w-full"
          />
          <h6 className="font-bold text-[#724182] text-lg">{props.title}</h6>
          <div className="flex gap-x-2 my-2">
            <img src="/icons/calendar.svg" alt="cal" />{" "}
            <p className="font-bold text-black text-xs">{props.date}</p>
          </div>
          <p className="text-sm text-justify md:mb-8 ">{props.description}</p>
        </div>
        <Content {...props} />
      </div>
    </div>
  );
};

const Content: FC<EventCardProps> = (props) => {
  switch (props.status) {
    case "LEADCOMP":
      return (
        <div
          onClick={props.openLeadComp}
          className="bg-[#FAEDF7] cursor-pointer py-2 md:py-4 mt-4 md:my-0 rounded-[48px] flex justify-center items-center w-full bottom-0 left-0"
        >
          <h6 className="text-[#724182]">Learn More</h6>
        </div>
      );
    case "LEADTALK":
      return (
        <>
          <div
            onClick={props.openLeadTalk}
            className="bg-[#FAEDF7] cursor-pointer py-2 md:py-4 mt-4 md:my-0 rounded-[48px] flex justify-center items-center w-full bottom-0 left-0"
          >
            <h6 className="text-[#724182]">Learn More</h6>
          </div>
          <div
            onClick={props.registerMainEvent}
            className="cursor-pointer py-2 md:py-4 ounded-[48px] flex justify-center items-center w-full bottom-0 left-0"
          >
            <h6 className="text-[#724182]">Register Here</h6>
          </div>      
        </>
      );
    default:
      return (
        <div
          style={{ border: "1px solid #724182" }}
          className="cursor-not-allowed py-2 md:py-4 mt-4 md:my-0 rounded-[48px] flex justify-center items-center w-full bottom-0 left-0"
        >
          <h6 className="text-[#724182]">Coming Soon</h6>
        </div>
      );
  }
};
