/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { JobCardProps } from "../../components/Dashboard";
import { Footer } from "../../components/Footer";
import { JobSearchDec } from "../../components/Jobfair/Bubbles/JobSearchDec";
import { Filter, MobileFilter } from "../../components/Jobfair/Filter";
import { JobCards } from "../../components/Jobfair/JobCards";
import { Nav } from "../../components/Nav";
import { baseURLFE } from "../../utils/api";
import { analytics } from "../../utils/api";

const JobfairPage: NextPage = () => {
  const [data, setData] = useState<JobCardProps[]>([]);

  const [shown, setShown] = useState<boolean>(false);
  const [showResults, setShowResults] = useState(false);
  const closeFilter = () => setShown(false);
  const openFilter = () => setShown(true);
  const router = useRouter();
  const query = router.query;
  const fetchData = async (q: string) => {
    const res = await fetch(baseURLFE(`api/jobs/?${q}`));
    const data = await res.json();
    if (res.ok) {
      setData(
        data.map((job: any) => {
          return {
            id: job.id,
            location: job.location,
            title: job.title,
            type: job.employment_type,
            company: {
              id: job.owner.id,
              img: job.owner.logo,
              name: job.owner.name,
            },
          } as JobCardProps;
        })
      );
    } else {
      for (const key in data) {
        data[key].forEach((message: string) =>
          toast.error(`${key}: ${message}`)
        );
      }
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams();
    Object.keys(query).forEach((key) => {
      if (!showResults) setShowResults(true);
      const d = query[key];
      if (Array.isArray(d)) {
        d.forEach((term) => {
          if (!!term) searchParams.append(key, term);
        });
      } else if (!!query[key]) {
        searchParams.append(key, String(query[key]));
      }
    });
    fetchData(searchParams.toString());
  }, [query]);

  useEffect(() => {
    analytics(2).catch();
  }, []);

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Head>
        <title>Lead Series Job Fair</title>
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
        className={`relative my-32 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] min-h-[80vh]`}
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
          <JobCards show={showResults} data={data} />
        </div>
        {/* DESKTOP: */}
        <div className="hidden md:flex gap-x-6">
          <div className="min-w-[280px]">
            <Filter />
          </div>
          <div className="w-full">
            <JobCards show={showResults} data={data} />
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
