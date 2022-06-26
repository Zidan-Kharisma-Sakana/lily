/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const LeadCompContent = () => {
  return (
    <>
      <h4 className="text-2xl font-bold">LeadComp</h4>
      <div id="about-leadcomp" className="my-6">
        <h4 className="text-lg font-bold">About LeadComp</h4>
        <p className="my-2">
          LeadComp is an Initiative SDG Competition that aims to accelerate
          youth’s innovation towards the creation of sustainable economic
          growth. This event will focus on SDGs No 8 and 9, while using Smart
          City as the handy innovation to achieve a greater state.
        </p>
        <div className="flex items-center text-xs gap-x-2">
          <p>More detailed explanation about LeadComp on our booklet</p>
          <a
            href="https://drive.google.com/file/d/17glCao3v8JrxLIRd4bGBps-qTM2_jxDX/view"
            className="bg-[#724182] text-center rounded-[48px] py-2 px-4 text-white cursor-pointer"
          >
            Download Booklet
          </a>
        </div>
      </div>
      <div id="timeline">
        <h4 className="text-lg font-bold">LeadComp Timeline</h4>
        <img
          src="/images/timeline.png"
          alt="timeline leadcomp"
          className="hidden md:block mx-auto w-1/3 xl:w-2/5"
        />
        <img
          src="/images/timeline.png"
          alt="timeline leadcomp"
          className="my-4 sm:my-6 md:hidden mx-auto w-1/2 sm:w-2/5"
        />
      </div>
      <div id="registration">
        <h4 className="text-lg font-bold">Registration</h4>
        <div className="mt-4 sm:mt-6 md:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 gap-y-4 sm:gap-y-8 xl:gap-4">
          <RegistrationCard
            title="Early Bird"
            harga="RP125.000"
            price="$10"
            status="CLOSED"
            tanggal="18 April - 2 May 2022"
          />
          <RegistrationCard
            title="Normal"
            harga="RP150.000"
            price="$15"
            status="CLOSED"
            tanggal="3 May - 24 May 2022"
          />
          <RegistrationCard
            title="Late"
            harga="RP175.000"
            price="$25"
            status="CLOSED"
            tanggal="25 May - 11 June 2022"
            isLast
          />
        </div>
      </div>
    </>
  );
};

const RegistrationCard: FC<{
  title: string;
  harga: string;
  price: string;
  status: "CLOSED" | "REGISTER" | "COMING_SOON";
  tanggal: string;
  isLast?: boolean;
}> = (p) => {
  const mapstyle = {
    CLOSED: { background: "#E3E5E6", color: "#979C9E", cursor: "not-allowed" },
    REGISTER: { background: "#724182", color: "#FFFFFF", cursor: "pointer" },
    COMING_SOON: { border: "1px solid #724182", color: "#724182" },
  };
  const mapword = {
    CLOSED: "Registration Closed",
    REGISTER: "Register Here",
    COMING_SOON: "Coming Soon",
  };
  return (
    <div
      onClick={() =>
        p.status === "REGISTER" &&
        window.open(" https://linktr.ee/leadseries2022")
      }
      style={{
        backdropFilter: "blur(4px)",
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(180deg, rgba(210, 165, 255, 0.2375) 0%, rgba(205, 72, 204, 0.25) 100%)",
      }}
      className={` mx-auto md:mx-0 w-[240px] h-[200px] rounded-xl p-6 ${
        p.isLast ? "sm:col-span-2 md:col-span-1" : ""
      }`}
    >
      <h6 className="text-[#724182] font-bold text-lg">{p.title}</h6>
      <p className="text-2xl font-bold">
        {p.harga}
        <span className="text-lg font-medium">/ {p.price}</span>
      </p>
      <div className="flex justify-center mt-4 mb-2">
        <div style={mapstyle[p.status]} className="rounded-[48px] py-2 px-4">
          {mapword[p.status]}
        </div>
      </div>
      <p className="text-xs text-center">{p.tanggal}</p>
    </div>
  );
};
