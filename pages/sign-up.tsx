import { NextPage } from "next";
import Head from "next/head";
import { SignUpForm } from "../components/Auth/SignUp";
import { Footer } from "../components/Footer";

const SignUpPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sign Up LeadSeries</title>
        <meta
          name="description"
          content="A virtual event that aims to bring insights and practical knowledge for youth to develop their leadership."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUpForm />
      <div className="w-full hidden md:block">
        <Footer />
      </div>
    </div>
  );
};
export default SignUpPage;
