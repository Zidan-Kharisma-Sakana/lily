import Cookies from "js-cookie";
import { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

const TOC: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Terms of Service</title>
        <meta
          name="description"
          content="A virtual event that aims to bring insights and practical knowledge for youth to develop their leadership."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative">
        <Nav isHome={false} />
      </header>
      <main className="my-32 px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] 2xl:px-[200px] min-h-screen">
        <h1 className="text-primary-darkest text-2xl md:text-[32px] mb-6 md:mb-10 font-bold">
          Terms of Service
        </h1>
        <div className="mb-4 text-xs sm:text-sm md:text-base">
          <h4 className="font-bold">Terms</h4>
          <p>
            Terms of Service (also referred as “Terms”) mean these Terms of
            Service form the entire agreement between You and AIESEC in UI
            regarding the use of this website service for LeadSeries. Accessing
            this website means you are agreeing to be bound by these Website
            Terms and Conditions of Use and agree that you are responsible for
            the agreement with any applicable local laws.
          </p>
        </div>
        <div className="mb-4 text-xs sm:text-sm md:text-base">
          <h4 className="font-bold">Terms</h4>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on AIESEC in UI &#39;s Website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </p>
          <ol type="a" className="list-[lower-alpha] list-outside pl-8">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li>
              attempt to reverse engineer any software contained on AIESEC in
              UI&apos;s Website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transferring the materials to another person or &quot;mirror&quot;
              the materials on any other server.
            </li>
            <li>
              All the materials on this website and the website itself are
              protected by Law of the Republic of Indonesia No 28 of 2014 on
              Copyright. AIESEC in UI will retract your viewing right and you
              should destroy any downloaded materials in your possession whether
              it is printed or electronic format if there is any violation.
            </li>
          </ol>
        </div>
        <div className="mb-4 text-xs sm:text-sm md:text-base">
          <h4 className="font-bold">Personal Data</h4>
          <p>
            Your personal data (e.g. name, e-mail, and phone number) will be
            collected for your account on this website. By creating an account,
            you agree that AIESEC in UI may share your personal data to partner
            companies for talent sourcing purposes.
          </p>
        </div>
        <div className="mb-4 text-xs sm:text-sm md:text-base">
          <h4 className="font-bold">Disclaimer</h4>
          <p>
            There is no guarantee from AIESEC in UI that all the materials are
            accurate. The materials appearing on AIESEC in UI’s Website may
            include technical, typographical, or photographic errors. AIESEC in
            UI will not promise that any of the materials in this Website are
            accurate, complete, or current. AIESEC in UI may change the
            materials contained on its Website at any time without notice.
            AIESEC in UI does not make any commitment to update the materials.
          </p>
        </div>
        <div className="mb-4 text-xs sm:text-sm md:text-base">
          <h4 className="font-bold">Linked Sites</h4>
          <p>
            AIESEC in UI has not reviewed all of the sites linked to its Website
            and is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by AIESEC in UI of
            the site. The use of any linked website is at the user’s own risk.
            Site Terms of Use Modifications AIESEC in UI may revise these Terms
            of Use for its Website at any time without prior notice. By using
            this Website, you are agreeing to be bound by the current version of
            these Terms and Conditions of Use.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TOC;
