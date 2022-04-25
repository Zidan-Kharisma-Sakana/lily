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

const Home: NextPage = () => {
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
      <header>
        <Hero />
      </header>
      <div className="overflow-hidden">
        <main className="py-8 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] xl:py-11 relative z-10">
          <About />
          <Banner />
          <Event />
          <SponsorPartner />
        </main>
      </div>
      <FAQ/>
    </div>
  );
};

export default Home;
