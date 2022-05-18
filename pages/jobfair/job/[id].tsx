/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { JobCardProps } from "../../../components/Dashboard";
import { Footer } from "../../../components/Footer";
import { AvailableJobs } from "../../../components/Jobfair/Job/JobDesc/AvailableJobs";
import {
  JobProfile,
  JobProfileProps,
} from "../../../components/Jobfair/Job/JobDesc/JobProfile";
import { Nav } from "../../../components/Nav";

const JobPage: NextPage = () => {
  const [shown, setShown] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Lead Series</title>
        <meta
          name="description"
          content="A virtual event that aims to bring insights and practical knowledge for youth to develop their leadership."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative">
        <Nav isHome={false} />
      </header>
      <main className={`my-20 md:my-24 lg:my-28  px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px]`}>
        <div className="hidden w-full md:flex mb-7 items-center justify-between">
          <h1 className="text-primary-darkest text-[32px] font-bold">
            Job Fair
          </h1>
        </div>
        <h4 className="font-bold text-primary-base mb-1 hidden md:block">
          Available Jobs
        </h4>
        <img
          src="/icons/arrow-left.svg"
          alt=""
          className="mb-2 md:hidden w-8 h-8"
        />
        <div className="w-full flex gap-x-3">
          <AvailableJobs data={dummyAvailableJobsData} />
          <div className="w-full">
            <JobProfile {...dummyJobProfileData} />
            {/* <JobForm/> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default JobPage;

const dummyJobProfileData: JobProfileProps = {
  Job: {
    title: "Job Title",
    company: {
      name: "insert company",
      img: "",
    },
    location: "Jakarta",
    type: "Full-time",
  },
  JobAbout:
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",
  JobActivity:
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",
  JobLooking: ["Blablabla", "Blablabla", "Blablabla", "Blablabla"],
};

const dummyAvailableJobsData: JobCardProps[] = Array(5).fill({
  title: "Job Title",
  company: {
    name: "insert company",
    img: "",
  },
  location: "Jakarta",
  type: "Full-time",
});
