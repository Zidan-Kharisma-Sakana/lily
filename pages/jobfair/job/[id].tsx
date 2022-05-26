/* eslint-disable @next/next/no-img-element */
import Cookies from "js-cookie";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
import {
  getFirstName,
  getLastName,
} from "../../../components/Nav/ProfileButton";
import { useAuth } from "../../../context/auth";
import { baseURLFE } from "../../../utils/api";

const JobPage: NextPage = ({ jobData, relatedData }) => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserFormData | null>(null);

  useEffect(() => {
    if (!userData && !!user) {
      fetchUserData(user);
    }
  }, [user]);

  const fetchUserData = async (user: any) => {
    const token = Cookies.get("token");
    const res = await fetch(baseURLFE("api/profile/jobfair/"), {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setUserData({
        firstname: getFirstName(user.full_name),
        lastname: getLastName(user.full_name),
        email: user.email,
        phone: user.phone,
        linkedin: data.linkedin ?? "",
        portfolio: data.portfolio_url ?? "",
        resumeFileName: data.cv ? "Resume.pdf" : "",
        cvFileName: data.cover ? "Cover_Letter.pdf" : "",
      });
    } else {
      toast.error("Oops, we have problem. " + data.detail ?? "");
    }
  };

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
        className={`max-w-screen overflow-x-hidden my-20 md:my-24 lg:my-28  px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] relative`}
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
          <AvailableJobs data={relatedData} />
          <div className="w-full mt-12 md:mt-0">
            <JobProfile {...jobData} UserForm={userData} />
          </div>
        </div>
        <JobProfileDec />
      </main>

      <Footer />
    </div>
  );
};
export default JobPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id ?? "";
  const p1 = fetch(baseURLFE(`api/jobs/${id}/`));
  const p2 = fetch(baseURLFE(`api/jobs/${id}/related/`));
  const res = await Promise.all([p1, p2]);
  if (res[0].ok && res[1].ok) {
    const job = await res[0].json();
    const related = (await res[1].json()) as any[];
    const jobData = {
      Job: {
        id: id,
        title: job.title,
        location: job.location,
        company: {
          name: job.owner.name,
          img: job.owner.logo,
          id: job.owner.id,
        },
        type: job.employment_type,
      },
      JobAbout: job.about_the_role,
      JobActivity: job.what_you_will_do,
      JobLooking: job.what_were_looking_for,
      UserForm: null,
    };

    const relatedData = related.map((data) => {
      return {
        id: data.id,
        location: data.location,
        company: {
          name: data.owner.name,
          img: data.owner.logo,
          id: data.owner.id,
        },
        title: data.title,
        type: data.employment_type,
      };
    });
    return {
      props: {
        jobData: jobData,
        relatedData: relatedData,
      },
    };
  }

  return {
    redirect: {
      destination: "/jobfair",
    },
  };
};
