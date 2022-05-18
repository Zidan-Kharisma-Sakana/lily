/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { JobCardProps } from "../../Dashboard";

export const JobCard: FC<JobCardProps> = (props) => {
  return (
    <div className="glassCard flex w-full text-xs mb-4 md:mb-6 gap-x-3 sm:gap-x-6 cursor-pointer">
      <img
        className="w-[45px] h-[45px] sm:w-[72px] sm:h-[72px] md:w-[96px] md:h-[96px] rounded-lg bg-[#C4C4C4]"
        src={props.company.img}
        alt={props.company.name + " logo"}
      />
      <div className="flex flex-col justify-between gap-y-1 sm:gap-y-2 text-xs sm:text-sm md:text-base">

        <div>
          <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
            {props.title}
          </h4>
          <h6>{props.company.name}</h6>
        </div>

        <div className="md:flex justify-between items-center gap-x-14 md:text-sm lg:text-base ">
          <div className="flex gap-x-2 mb-1 lg:gap-x-2.5 items-center md:w-[120px] lg:w-[185px]">
            <img
              src="/icons/map-pin.svg"
              alt="location"
              className="w-[12px] h-[14px] md:w-[14px] md:h-[16px]"
            />
            <p>{props.location}</p>
          </div>
          <div className="flex gap-x-2 mb-1 lg:gap-x-2.5 items-center">
            <img
              src="/icons/briefcase.svg"
              alt="tipe"
              className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
            />
            <p>{props.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export const JobCardMini: FC<JobCardProps> = (props) => {
  return (
    <div className="glassCard flex w-full text-xs mb-4 gap-x-2.5 cursor-pointer">
      <img
        className="w-[36px] h-[36px] rounded-lg bg-[#C4C4C4]"
        src={props.company.img}
        alt={props.company.name + " logo"}
      />
      <div className="flex flex-col justify-between gap-y-1 sm:gap-y-2 text-xs sm:text-sm md:text-base">

        <div>
          <h4 className="font-bold text-sm mb-1">
            {props.title}
          </h4>
          <h6>{props.company.name}</h6>
        </div>

        <div className="">
          <div className="flex gap-x-2 mb-1 items-center md:w-[120px] lg:w-[185px]">
            <img
              src="/icons/map-pin.svg"
              alt="location"
              className="w-[10px] h-[12px]"
            />
            <p>{props.location}</p>
          </div>
          <div className="flex gap-x-2 mb-1 items-center">
            <img
              src="/icons/briefcase.svg"
              alt="tipe"
              className="w-[12px] h-[12px]"
            />
            <p>{props.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
