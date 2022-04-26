/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import styles from "./Event.module.css";
import { LeadCompModal } from "./LeadCompModal";

export interface EventCardProps {
  url?: string;
  title: string;
  date: string;
  description: string;
  status: "CLOSED" | "REGISTRATION" | "COMING_SOON" | "LEARN_MORE";
}
export const EventCard: FC<EventCardProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.eventcard}>
      <div className="relative w-full h-full">
        <img
          src={props.url ?? "/images/event_default.jpg"}
          alt="event"
          className="hidden md:block mb-4"
        />
        <h6 className="font-bold text-[#724182] text-lg">{props.title}</h6>
        <div className="flex gap-x-2 my-2">
          <img src="/icons/calendar.svg" alt="cal" />{" "}
          <p className="font-bold text-black text-xs">{props.date}</p>
        </div>
        <p className="text-sm text-justify">{props.description}</p>
        {props.status !== "CLOSED" ? (
          props.status === "COMING_SOON" ? (
            <div
              style={{ border: "1px solid #724182" }}
              className="cursor-not-allowed py-2 md:py-4 mt-4 md:my-0 rounded-[48px] flex justify-center items-center w-full md:absolute bottom-0 left-0"
            >
              <h6 className="text-[#724182]">Coming Soon</h6>
            </div>
          ) : props.status === "REGISTRATION" ? (
            <div className="bg-[#FAEDF7] cursor-pointer py-2 md:py-4 mt-4 md:my-0 rounded-[48px] flex justify-center items-center w-full md:absolute bottom-0 left-0">
              <h6 className="text-[#724182]">Register Here</h6>
            </div>
          ) : (
            <>
              <LeadCompModal open={open} close={() => setOpen(false)} />
              <div
                onClick={() => setOpen(true)}
                className="bg-[#FAEDF7] cursor-pointer py-2 md:py-4 mt-4 md:my-0 rounded-[48px] flex justify-center items-center w-full md:absolute bottom-0 left-0"
              >
                <h6 className="text-[#724182]">Learn More</h6>
              </div>
            </>
          )
        ) : (
          <div className="bg-[#E3E5E6] cursor-not-allowed py-2 md:py-4 mt-4 md:my-0 rounded-[48px] flex justify-center items-center w-full md:absolute bottom-0 left-0">
            <h6 style={{ color: "rgba(151, 156, 158, 1)" }}>
              Registration Closed
            </h6>
          </div>
        )}
      </div>
    </div>
  );
};
