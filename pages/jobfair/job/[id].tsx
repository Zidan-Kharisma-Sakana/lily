/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { JobCardProps } from "../../../components/Dashboard";
import { Footer } from "../../../components/Footer";
import {
  JobProfileDec,
  JobSearchDec,
} from "../../../components/Jobfair/Bubbles/JobSearchDec";
import { AvailableJobs } from "../../../components/Jobfair/Job/JobDesc/AvailableJobs";
import {
  JobProfile,
  JobProfileProps,
} from "../../../components/Jobfair/Job/JobDesc/JobProfile";
import {
  JobFairForm,
  UserFormData,
} from "../../../components/Jobfair/Job/JobForm";
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
        <Nav isHome={false} withBackButton={true} />
      </header>
      <main
        className={`my-20 md:my-24 lg:my-28  px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] relative`}
      >
        <JobSearchDec />
        <div className="hidden w-full md:flex mb-7 items-center justify-between">
          <h1 className="text-primary-darkest text-[32px] font-bold">
            Job Fair
          </h1>
        </div>
        <h4 className="font-bold text-primary-base mb-1 hidden md:block">
          Available Jobs
        </h4>

        <div className="w-full flex gap-x-3">
          <AvailableJobs data={dummyAvailableJobsData} />
          <div className="w-full mt-12 md:mt-0">
            <JobProfile {...dummyJobProfileData} />
          </div>
        </div>
        <JobProfileDec />

      </main>

      <Footer />
    </div>
  );
};
export default JobPage;

const dummyAvailableJobsData: JobCardProps[] = Array(5).fill({
  title: "Job Title",
  company: {
    name: "insert company",
    img: "",
  },
  location: "Jakarta",
  type: "Full-time",
});

const dummyJobFormData: UserFormData = {
  firstname: "Anastasia Audi",
  lastname: "wulandari",
  email: "anastasiaaudi@gmail.com",
  phone: "08567681240",
  resumeFileName: "Resume_dummy.pdf",
  cvFileName: "cover_letter.pdf",
  linkedin: "linkedin.com/anastasiaaudiw",
  portfolio: "googledrive.com/....",
};

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
  UserForm: dummyJobFormData,
};
