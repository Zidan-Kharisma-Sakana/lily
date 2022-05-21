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
import { useState } from "react";
import { HomeModal } from "../components/Event/HomeModal";

export enum HomeModalState {
  LEADCOMP = "LeadComp",
  LEADTALK = "LeadTalk",
  NOSHOW = "NOSHOW",
}

const Home: NextPage = () => {
  const [open, setOpen] = useState<HomeModalState>(HomeModalState.NOSHOW);
  function openLeadComp() {
    setOpen(HomeModalState.LEADCOMP);
  }
  function openLeadTalk() {
    console.log("TEST");
    setOpen(HomeModalState.LEADTALK);
  }
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
      <HomeModal open={open} close={() => setOpen(HomeModalState.NOSHOW)} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
