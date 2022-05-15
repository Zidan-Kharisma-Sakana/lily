import { FC } from "react";
import { JobCardProps } from "../../Dashboard";
import { JobCard } from "./JobCard";

export const JobCards: FC<{ data: JobCardProps[] }> = ({ data }) => {
  return (
    <div className="w-full">
      {data.map((job, idx) => (
        <JobCard key={"job-" + idx} {...job} />
      ))}
    </div>
  );
};
