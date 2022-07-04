/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SignInForm } from "../components/Auth/SignIn";
import { Footer } from "../components/Footer";

// http://localhost:8000/https://leadseries.id/activate?uid=OA&token=b4owu9-b4327e9905efc4b6717ceeb5d32e64bb

const ActivatePage: NextPage = () => {
  const r = useRouter();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const { uid, token } = r.query;
    if (!loading && uid && token) {
      const activate = async () => {
        setLoading(true);
        const res = await fetch("/api/activate", {
          method: "POST",
          body: JSON.stringify({ uid, token }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          r.push("/sign-in");
        } else {
          const err = await res.json();
          setErr(err);
        }
      };
      activate();
    }
  }, [r, loading]);

  if (!!err) return <div>There is Error</div>;
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
    </div>
  );
};
export default ActivatePage;
