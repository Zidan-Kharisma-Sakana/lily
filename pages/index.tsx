import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { SponsorPartner } from "../components/SponsorPartner";
import { Event } from "../components/Event";
import styles from "../styles/Home.module.css";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { useEffect, useState } from "react";
import { HomeModal } from "../components/Event/HomeModal";
import { useRouter } from "next/router";
import { OnboardingContentProps } from "../components/Event/ModalBody/OnboardingContent";

export enum HomeModalState {
  LEADCOMP = "LeadComp",
  LEADTALK = "LeadTalk",
  NOSHOW = "NOSHOW",
  ONBOARDING = "Account Created!",
}

const Home: NextPage = () => {
  const [open, setOpen] = useState<HomeModalState>(HomeModalState.NOSHOW);
  const router = useRouter();
  function openLeadComp() {
    setOpen(HomeModalState.LEADCOMP);
  }
  function openLeadTalk() {
    setOpen(HomeModalState.LEADTALK);
  }
  useEffect(() => {
    const isOnboarding = !!router.query["onboard"] ?? false;
    if (isOnboarding) setOpen(HomeModalState.ONBOARDING);
  }, [router]);

  const data: OnboardingContentProps = {
    fullname: "...",
    email: "aaa@gmail.com",
    phone: "",
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
        <Nav />
        <Hero />
      </header>
      <div className={`overflow-hidden `}>
        <main className="py-8 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] xl:py-11 relative z-10">
          <About />
          <Banner />
          <Event openLeadComp={openLeadComp} openLeadTalk={openLeadTalk} />
          <SponsorPartner />
        </main>
      </div>
      <HomeModal
        data={data}
        open={open}
        close={() => setOpen(HomeModalState.NOSHOW)}
      />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
