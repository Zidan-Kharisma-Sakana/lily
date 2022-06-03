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
import { useAuth } from "../context/auth";
import {analytics} from "../utils/api";

import * as gtag from "../lib/ga";

export enum HomeModalState {
  LEADCOMP = "LeadComp",
  LEADTALK = "LeadTalk",
  NOSHOW = "NOSHOW",
  ONBOARDING = "Account Created!",
  REGISTERED = "Registered",
}

const Home: NextPage = () => {
  const [open, setOpen] = useState<HomeModalState>(HomeModalState.NOSHOW);
  const router = useRouter();
  const { user } = useAuth();
  const [dataOnboard, setDataOnBoard] = useState<OnboardingContentProps>({
    email: "",
  });
  useEffect(() => {
    const isOnboarding = !!router.query["onboard"] ?? false;
    if (isOnboarding) setOpen(HomeModalState.ONBOARDING);

    if (!!user && isOnboarding) {
      if (!!user.full_name && !!user.phone) {
        router.push("/");
      } else {
        setDataOnBoard({
          email: user.email,
        });
        setOpen(HomeModalState.ONBOARDING);
      }
    }
  }, [user, router]);

  function openLeadComp() {
    setOpen(HomeModalState.LEADCOMP);
  }
  function openLeadTalk() {
    setOpen(HomeModalState.LEADTALK);
  }
  function openSuccess() {
    setOpen(HomeModalState.REGISTERED);
  }
  useEffect(() => {
    const isOnboarding = !!router.query["onboard"] ?? false;
    if (isOnboarding) setOpen(HomeModalState.ONBOARDING);
    analytics(1).catch();

    gtag.event({
        action: 'homepage_visit',
        category: 'general',
    })
  }, [router]);

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
        <Nav isHome />
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
        data={dataOnboard}
        open={open}
        onSuccess={openSuccess}
        close={() => setOpen(HomeModalState.NOSHOW)}
      />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
