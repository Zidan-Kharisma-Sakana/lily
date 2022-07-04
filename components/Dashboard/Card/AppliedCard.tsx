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
    <div
      onClick={() => window.open(`/jobfair/job/${props.id}`)}
      className="glassCard flex w-full text-xs mb-3 gap-x-3 sm:gap-x-6 cursor-pointer"
    >
      <img
        onClick={() => window.open(`/jobfair/${props.company.id}`)}
        className=" w-[45px] h-[45px] sm:w-[72px] sm:h-[72px] md:w-[96px] md:h-[96px] rounded-lg bg-[#C4C4C4]"
        src={props.company.img}
        alt={props.company.name + " logo"}
      />
      <div className="w-full flex flex-col gap-y-1 sm:gap-y-2 text-xs sm:text-sm md:text-base">
        <h4 className="font-bold text-sm sm:text-base md:text-lg">
          {props.title}
        </h4>
        <a
          onClick={(e) => e.stopPropagation()}
          href={"/jobfair/" + props.company.id}
          target="_blank"
          rel="noreferrer"
        >
          <h6>{props.company.name}</h6>
        </a>
        <div className="md:flex items-center gap-x-14 md:text-sm lg:text-base ">
          <div className="flex gap-x-2 mb-1 lg:gap-x-2.5 items-center md:w-[120px] lg:w-[185px] xl:w-52">
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
