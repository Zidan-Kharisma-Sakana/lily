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
import { baseURLFE } from "../../utils/api";

const CompanyProfilePage: NextPage = ({ jobData, companyData }) => {
  console.log(jobData);
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
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
        className={`max-w-screen overflow-x-hidden  relative py-32 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] `}
      >
        <JobSearchDec />

        <div className="w-full flex mb-10 items-center justify-between">
          <h1 className="text-primary-darkest text-[32px] font-bold">
            {companyData.name}
          </h1>
        </div>
        <div className="md:flex gap-x-6">
          <div className="w-full mb-7 md:min-w-[270px] md:max-w-[270px]">
            <CompanyProfile {...companyData} />
          </div>
          <div className="w-full">
            <JobCards data={jobData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default CompanyProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.company ?? "";
  const p1 = await fetch(baseURLFE(`api/company/${id}/`));
  const data = await p1.json();

  if (p1.ok) {
    const companyData: CompanyProfileProps = {
      name: data.name,
      about: data.description,
      email: data.email,
      logo: data.logo,
      facebook: data.facebook,
      instagram: data.instagram,
      location: data.location,
      website: data.website,
    };

    const jobData: JobCardProps[] = data.openings.map((job) => {
      return {
        company: {
          img: data.logo,
          name: data.name,
          id: String(data.id),
        },
        id: job.id,
        location: job.location,
        title: job.title,
        type: job.employment_type,
      } as JobCardProps;
    });

    console.log(jobData);

    return {
      props: {
        jobData: jobData,
        companyData: companyData,
      },
    };
  }

  return {
    redirect: {
      destination: "/jobfair",
    },
  };
};
