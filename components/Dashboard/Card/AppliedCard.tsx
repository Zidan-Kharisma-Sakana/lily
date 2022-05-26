/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export interface JobCardProps {
  id: string | number;
  title: string;
  company: {
    name: string;
    img: string;
    id: string;
  };
  location: string;
  type: string;
}

export interface AppliedJobCardProps extends JobCardProps {
  applyTime?: Date;
}

export const AppliedCard: FC<AppliedJobCardProps> = (props) => {
  const applyTime = new Date(Date.parse(String(props.applyTime)));
  return (
    <div className="glassCard flex w-full text-xs mb-3 gap-x-3 sm:gap-x-6 cursor-pointer">
      <img
        className="w-[45px] h-[45px] sm:w-[72px] sm:h-[72px] md:w-[96px] md:h-[96px] rounded-lg bg-[#C4C4C4]"
        src={props.company.img}
        alt={props.company.name + " logo"}
      />
      <div className="w-full flex flex-col gap-y-1 sm:gap-y-2 text-xs sm:text-sm md:text-base">
        {!!props.applyTime && <p>Applied on {applyTime.toUTCString()}</p>}
        <h4 className="font-bold text-sm sm:text-base md:text-lg">
          {props.title}
        </h4>
        <h6>{props.company.name}</h6>
        <div className="md:flex justify-between items-center">
          <div className="w-1/2 flex gap-x-2 mb-1 lg:gap-x-2.5 items-center">
            <img
              src="/icons/map-pin.svg"
              alt="location"
              className="w-[12px] h-[14px]"
            />
            <p>{props.location}</p>
          </div>
          <div className="w-1/2 flex gap-x-2 mb-1 lg:gap-x-2.5 items-center">
            <img
              src="/icons/briefcase.svg"
              alt="tipe"
              className="w-[16px] h-[16px]"
            />
            <p>{props.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};