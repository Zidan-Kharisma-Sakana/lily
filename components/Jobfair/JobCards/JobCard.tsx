/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { JobCardProps } from "../../Dashboard";

export const JobCard: FC<JobCardProps> = (props) => {
  return (
    <div
      onClick={() => window.open(`/jobfair/job/${props.id}`)}
      style={{ background: "rgba(205, 207, 208, 0.25)" }}
      className="p-6 z-5 relative rounded-lg glassCard flex w-full text-xs mb-4 md:mb-6 gap-x-3 sm:gap-x-6 cursor-pointer"
    >
      <a
        onClick={(e) => e.stopPropagation()}
        href={"/jobfair/" + props.company.id}
      >
        <div className="w-[45px] sm:w-[72px] sm:h-[72px] md:w-[96px] md:h-[96px] relative">
          <img
            className="w-full rounded-lg bg-[#C4C4C4] absolute left-0 top-1/2 -translate-y-1/2"
            src={props.company.img}
            alt={props.company.name + " logo"}
          />{" "}
        </div>
      </a>
      <div className="flex flex-col justify-between gap-y-1 sm:gap-y-2 text-xs sm:text-sm md:text-base w-full">
        <div>
          <a
            onClick={(e) => e.stopPropagation()}
            href={"/jobfair/job/" + props.id}
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
              {props.title}
            </h4>
          </a>
          <h6 className="inline" onClick={(e) => e.stopPropagation()}>
            <a className="" href={"/jobfair/" + props.company.id}>
              {props.company.name}
            </a>
          </h6>
        </div>

        <div className="md:flex items-center gap-x-14 xl:gap-x-24 md:text-sm lg:text-base ">
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

export const JobCardMini: FC<JobCardProps> = (props) => {
  return (
    <div
      onClick={() => window.open(`/jobfair/job/${props.id}`)}
      className="glassCard flex w-full text-xs mb-4 gap-x-2.5 cursor-pointer"
    >
      <img
        onClick={() => window.open(`/jobfair/${props.company.id}`)}
        className="w-[36px] h-[36px] rounded-lg bg-[#C4C4C4]"
        src={props.company.img}
        alt={props.company.name + " logo"}
      />
      <div className="flex flex-col justify-between gap-y-1 sm:gap-y-2 text-xs sm:text-sm md:text-base">
        <div>
          <a
            onClick={(e) => e.stopPropagation()}
            href={"/jobfair/job/" + props.id}
          >
            <h4 className="font-bold text-sm mb-1">{props.title}</h4>
          </a>
          <h6 onClick={(e) => e.stopPropagation()}>
            <a className="" href={"/jobfair/" + props.company.id}>
              {props.company.name}
            </a>
          </h6>
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
