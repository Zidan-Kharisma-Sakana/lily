import { FC } from "react";
import { JobCardProps } from "../../Dashboard";
import { JobCard } from "./JobCard";

export const JobCards: FC<{ data: JobCardProps[]; show: boolean }> = ({
  data,
  show,
}) => {
  return (
    <div className="w-full">
      {show ? (
        <p className="mb-4 text-lg font-bold">
          {data?.length ?? 0} results found
        </p>
      ) : (
        <></>
      )}

      {data.map((job, idx) => (
        <JobCard key={"job-" + idx} {...job} />
      ))}
    </div>
  );
};
