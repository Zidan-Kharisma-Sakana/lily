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
import { LeadCompModal } from "../components/Event/LeadCompModal";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  function openLeadComp(){
    setOpen(true)
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
      <div className="overflow-hidden">
        <main className="py-8 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] xl:py-11 relative z-10">
          <About />
          <Banner />
          <Event openLeadComp={openLeadComp} />
          <SponsorPartner />
        </main>
      </div>
      <LeadCompModal open={open} close={() => setOpen(false)} />
      <FAQ/>
      <Footer />
    </div>
  );
};

export default Home;
