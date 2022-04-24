import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { SponsorPartner } from "../components/SponsorPartner";
import { Event } from "../components/Event";
import styles from "../styles/Home.module.css";

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
      <main className="py-11 px-28 xl:px-[121px] ">
        <About />
        <Banner />
        <Event />
        <SponsorPartner />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
