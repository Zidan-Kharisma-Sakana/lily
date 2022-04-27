/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import { SignInForm } from "../components/Auth/SignIn";
import { Footer } from "../components/Footer";

const SignInPage: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Sign In LeadSeries</title>
        <meta
          name="description"
          content="A virtual event that aims to bring insights and practical knowledge for youth to develop their leadership."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInForm />
      <div className="w-full hidden md:block">
        <Footer />
      </div>
    </div>
  );
};
export default SignInPage;
