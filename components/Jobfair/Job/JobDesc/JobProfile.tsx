/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useAuth } from "../../../../context/auth";
import { JobCardProps } from "../../../Dashboard";
import { JobFairForm, UserFormData } from "../JobForm";
import { JobAbout, JobActivity, JobLooking } from "./Desc";

export interface JobProfileProps {
  Job: JobCardProps;
  JobAbout: string;
  JobActivity: string;
  JobLooking: string;
  UserForm: UserFormData | null;
}

export enum JobProfileModalState {
  DEFAULT = "DEFAULT",
  NOSHOW = "NOSHOW",
  AUTOFILLED = "AUTOFILLED",
  CONFIRMATION = "CONFIRMATION",
}

export const JobProfile: FC<JobProfileProps> = (data) => {
  const [modal, setModal] = useState<JobProfileModalState>(
    JobProfileModalState.DEFAULT
  );
  const { user } = useAuth();
  const router = useRouter()
  
  const showModalApply = () => {
    if(!!user){
      setModal(JobProfileModalState.AUTOFILLED);
    }else{
      router.push('/sign-in')
    }
  };
  const { Job } = data;
  return (
    <>
      <div className="glassCardNoPad relative z-5 w-full py-[40px] px-[44px] xl:py-[74px] xl:px-[79px]">
        <div className="flex gap-x-4 md:gap-x-5 lg:gap-x-6 border-b-[1px] border-[#C4C4C4] pb-8">
          <img
            src={Job.company.img}
            alt=""
            className="rounded-xl bg-[#C4C4C4] w-16 h-16 sm:w-[100px] sm:h-[100px] md:w-[157px] md:h-[157px]"
          />
          <div className="flex flex-col items-start">
            <h4 className="text-2xl md:text-[32px] font-bold text-primary-darkest mb-2">
              {Job.title}
            </h4>
            <p>{Job.company.name}</p>

            <div className="flex flex-col gap-y-2 mb-8 mt-5 text-sm">
              <div className="flex gap-x-2 items-baseline">
                <img
                  src="/icons/map-pin2.svg"
                  alt=""
                  className="w-4 h-4 translate-y-0.5"
                />
                <p>{Job.location}</p>
              </div>
              <div className="flex gap-x-2 items-baseline">
                <img
                  src="/icons/briefcase.svg"
                  alt=""
                  className="w-4 h-4 translate-y-0.5"
                />
                <p>{Job.type}</p>
              </div>
            </div>

            <div
              onClick={() => showModalApply()}
              id="applyButton"
              className="cursor-pointer p-4 pr-8 py-3 bg-primary-base gap-x-2 text-white font-medium rounded-[48px] flex"
            >
              <img src="/icons/apply.svg" alt="w-6 h-6" />
              <p>Apply</p>
            </div>
          </div>
        </div>
        <JobAbout data={data.JobAbout} />
        <JobActivity data={data.JobActivity} />
        <JobLooking data={data.JobLooking} />
      </div>{" "}
      <JobFairForm
        data={data.UserForm}
        apply={modal !== "DEFAULT"}
        state={modal}
        setModal={setModal}
      />
    </>
  );
};
