/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { JobCardProps } from "../../components/Dashboard";
import { Footer } from "../../components/Footer";
import { JobSearchDec } from "../../components/Jobfair/Bubbles/JobSearchDec";
import { Filter, MobileFilter } from "../../components/Jobfair/Filter";
import { JobCards } from "../../components/Jobfair/JobCards";
import { Nav } from "../../components/Nav";
import {analytics} from "../../utils/api";

const JobfairPage: NextPage = () => {
  const data = dummyData;

  const [shown, setShown] = useState<boolean>(false);
  const closeFilter = () => setShown(false);
  const openFilter = () => setShown(true);

  useEffect(() => {
    analytics(2).catch();
  }, [])

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
      <main
        className={`my-32 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px]`}
      >
        <JobSearchDec />
        <div className="w-full flex  mb-10 items-center justify-between">
          <h1 className="text-primary-darkest text-[32px] font-bold">
            Job Fair
          </h1>
          <div
            onClick={openFilter}
            className="border-primary-base border cursor-pointer md:hidden text-primary-base flex gap-x-2 items-center py-2 px-4 rounded-[48px] text-sm"
          >
            <p>Filter</p>
            <img src="/icons/filter.svg" alt="" className="w-4 h-4" />
          </div>
        </div>
        {/* MOBILE: */}
        <div className="min-h-screen h-full md:hidden">
          <MobileFilter shown={shown} close={closeFilter} />
          <JobCards data={data} />
        </div>
        {/* DESKTOP: */}
        <div className="hidden md:flex gap-x-6">
          <div className="min-w-[280px]">
            <Filter />
          </div>
          <div className="w-full">
            <JobCards data={data} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default JobfairPage;

const dummyData: JobCardProps[] = Array(20).fill({
  title: "Job Title",
  company: {
    name: "insert company",
    img: "",
  },
  location: "Jakarta",
  type: "Full-time",
});
