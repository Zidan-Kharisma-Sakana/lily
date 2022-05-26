import Cookies from "js-cookie";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  AppliedCard,
  AppliedJobCardProps,
  RegisteredCard,
  RegisteredEventsData,
  SideBar,
  UserInfo,
} from "../components/Dashboard";
import { JobFairFormProps } from "../components/Dashboard/Sidebar/ModalDashboard.tsx/Form";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { useAuth } from "../context/auth";

interface UserData {
  UserInfo: UserInfo;
  RegisteredEvents: RegisteredEventsData[];
  AppliedJobs: AppliedJobCardProps[];
}

const Dashboard: NextPage = () => {
  const { user } = useAuth();
  const [dashboardData, setData] = useState<UserData>();

  const retrieveData = async (token: string) => {
    const res = await fetch("api/dashboard", {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();
    if (res.ok) {
      setData({
        UserInfo: {
          profile: {
            name: user.full_name ?? "",
            phone: user.phone ?? "",
          },
          account: {
            email: user.email ?? "",
          },
          jobfairProfile: data.UserInfo,
        },
        AppliedJobs: data.AppliedJobs,
        RegisteredEvents: data.RegisteredEvents.map((data: any) => {
          if (!data.date) return { event: data.event };
          return {
            event: data.event,
            date: new Date(Date.parse(data.date)),
          };
        }),
      });
    } else {
      toast.error(data.message ?? "Unknown Error", {
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        retrieveData(token);
      }
    }
    if (user) loadUserFromCookies();
  }, [user]);

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
      <main className="my-32 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] min-h-screen">
        <h1 className="text-primary-darkest text-[32px] mb-10 font-bold">
          Dashboard
        </h1>
        {!!dashboardData && (
          <div className="md:flex md:justify-start lg:justify-between gap-x-6 2xl:justify-around">
            <SideBar data={dashboardData.UserInfo} />
            <div className="w-full md:w-[450px] lg:w-[650px] xl:w-3/4">
              <section id="registered-events">
                <h3 className="text-primary-darkest font-bold text-lg mb-3">
                  Registered Events
                </h3>
                {dashboardData.RegisteredEvents.map((data) => (
                  <RegisteredCard key={data.event} {...data} />
                ))}
              </section>
              <section id="applied-jobs" className="mt-6">
                <h3 className="text-primary-darkest font-bold text-lg mb-3">
                  Applied Job
                </h3>
                {dashboardData.AppliedJobs.map((data, idx) => (
                  <AppliedCard key={`job-${idx}`} {...data} />
                ))}
              </section>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard