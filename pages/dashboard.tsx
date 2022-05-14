import { NextPage } from "next";
import Head from "next/head";
import {
  AppliedCard,
  AppliedJobCardProps,
  RegisteredCard,
  RegisteredEventsData,
  SideBar,
  UserInfo,
} from "../components/Dashboard";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

interface UserData {
  UserInfo: UserInfo;
  RegisteredEvents: RegisteredEventsData[];
  AppliedJobs: AppliedJobCardProps[];
}

const Dashboard: NextPage = () => {
  const data: UserData = dummyData;
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
      <main className="my-32 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px]">
        <h1 className="text-primary-darkest text-[32px] mb-10 font-bold">Dashboard</h1>
        <div className="md:flex md:justify-start lg:justify-between gap-x-6 2xl:justify-around">
          <SideBar data={data.UserInfo} />
          <div className="w-full md:w-[450px] lg:w-[650px]">
            <section id="registered-events">
              <h3 className="text-primary-darkest font-bold text-lg mb-3">Registered Events</h3>
              {data.RegisteredEvents.map((data) => (
                <RegisteredCard key={data.event} {...data} />
              ))}
            </section>
            <section id="applied-jobs" className="mt-6">
              <h3 className="text-primary-darkest font-bold text-lg mb-3">Applied Job</h3>
              {data.AppliedJobs.map((data, idx) => (
                <AppliedCard key={`job-${idx}`} {...data} />
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

const dummyData: UserData = {
  UserInfo: {
    profile: {
      name: "Lanzhu Zhong",
      phone: "08567681240",
    },
    account: {
      email: "lanzhu@niji-high.jp",
    },
    jobfairProfile: [
      {
        title: "CV",
        filename: "Lanzhu_Zhong_CV.pdf",
        link: "",
      },
      {
        title: "linkedin",
        filename: "linkedin.com/lanzhu",
        link: "linkedin.com/lanzhu",
      },
      {
        title: "Website/Portfolio",
        filename: "Lanzhu_Zhong_Portfolio.com",
        link: "linkedin.com/",
      },
    ],
  },
  RegisteredEvents: [
    {
      event: "Event 1",
      date: new Date(2022, 12, 11),
    },
    {
      event: "Event 2",
      date: new Date(2022, 12, 11),
    },
  ],
  AppliedJobs: [
    {
      title: "Job Title",
      company: {
        name: "Company Name Here",
        img: "",
      },
      location: "Remote",
      type: "full-time",
      applyTime: new Date(2022, 12, 11),
    },
    {
      title: "Job Title",
      company: {
        name: "Company Name Here",
        img: "",
      },
      location: "Remote",
      type: "full-time",
      applyTime: new Date(2022, 12, 11),
    },
    {
      title: "Job Title",
      company: {
        name: "Company Name Here",
        img: "",
      },
      location: "DKI Jakarta",
      type: "full-time",
      applyTime: new Date(2022, 12, 11),
    },
  ],
};
