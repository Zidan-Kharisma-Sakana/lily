/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { JobCardProps } from "../../components/Dashboard";
import { Footer } from "../../components/Footer";
import { JobSearchDec } from "../../components/Jobfair/Bubbles/JobSearchDec";
import {
  CompanyProfile,
  CompanyProfileProps,
} from "../../components/Jobfair/CompanyProfile";
import { Filter, MobileFilter } from "../../components/Jobfair/Filter";
import { JobCards } from "../../components/Jobfair/JobCards";
import { Nav } from "../../components/Nav";
import * as gtag from "../../lib/ga";

const CompanyProfilePage: NextPage = () => {
  const data = dummyData;
  const companyData = companyDummyData;

  useEffect(() => {
    gtag.event({
      action: 'jobfair_company_visit',
      category: 'general',
      label: companyData.name
    })
  }, [companyData])

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
      <main className={`my-32 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px]`}>
        <JobSearchDec />

        <div className="w-full flex mb-10 items-center justify-between">
          <h1 className="text-primary-darkest text-[32px] font-bold">
            {companyData.name}
          </h1>
        </div>
        <div className="md:flex gap-x-6">
          <div className="w-full mb-7 md:min-w-[270px] md:max-w-[270px]">
            <CompanyProfile {...companyDummyData} />
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
export default CompanyProfilePage;

const dummyData: JobCardProps[] = Array(20).fill({
  title: "Job Title",
  company: {
    name: "insert company",
    img: "",
  },
  location: "Jakarta",
  type: "Full-time",
});

const companyDummyData: CompanyProfileProps = {
  name: "Insert company name",
  about: "Insert company description",
  email: "",
  facebook: "",
  instagram: "",
  location: "Insert Company Location",
  logo: "Insert company",
  website: "Insert company website",
};
