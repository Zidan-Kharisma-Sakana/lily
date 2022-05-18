import { FC } from "react";
import { JobCardProps } from "../../../Dashboard";
import { JobCards } from "../../JobCards";
import { JobCardMini } from "../../JobCards/JobCard";

export const AvailableJobs: FC<{ data: JobCardProps[] }> = ({ data }) => {
  return (
    <div className="hidden md:block relative md:w-[210px] lg:w-[240px] xl:min-w-[270px] xl:max-w-[270px]">
      {data.map((obj, idx) => (
        <JobCardMini key={"job-" + idx} {...obj} />
      ))}
    </div>
  );
};
