/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Home, { HomeModalState } from "../../pages";
import { LeadCompContent } from "./ModalBody/LeadCompContent";
import { LeadTalkContent } from "./ModalBody/LeadTalkContent";
import {
  OnboardingContent,
  OnboardingContentProps,
} from "./ModalBody/OnboardingContent";

export const HomeModal: FC<{
  open: HomeModalState;
  close: () => void;
  onSuccess: () => void;
  children?: React.ReactNode;
  data?: OnboardingContentProps;
}> = ({ open, close, children, data, onSuccess }) => {
  const [saved, setSave] = useState(false);
  const setSaved = () => setSave(true);
  const router = useRouter();

  if (open === HomeModalState.NOSHOW) return <></>;
  if (saved) {
    return (
      <div
        onClick={close}
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          zIndex: "500",
        }}
        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" rounded-3xl overflow-hidden relative w-[300px] md:w-[392px]"
        >
          <div className="px-6 text-center lg:px-10 py-8 relative flex flex-col items-center z-20 bg-white overflow-y-scroll myscrollbar">
            <img
              src="/images/check_icon.svg"
              alt=""
              className="w-20 h-20 md:w-[114px] md:h-[114px]"
            />
            <p className="text-[24px] md:text-[30px] text-center font-bold my-5 md:my-7">
              Account Created!
            </p>

            <p className="text-center mb-8 ">
              Checkout your profile to fill further detail information.
            </p>
            <div
              onClick={() => location.replace("/dashboard")}
              className="text-primary-light font-medium cursor-pointer text-center"
            >
              <p>&#8594; Go to profile</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (open === HomeModalState.REGISTERED) {
    return (
      <div
        onClick={close}
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          zIndex: "500",
        }}
        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" rounded-3xl overflow-hidden relative w-[340px] md:w-[392px]"
        >
          <div className="py-16 px-4 text-center bg-white relative">
          <div
            onClick={close}
            className="text-black text-3xl font-black absolute right-7 top-7 cursor-pointer"
          >
            &#x2715;
          </div>
            <img
              src="/images/check_icon.svg"
              alt=""
              className="w-[114px] h-[114px] mx-auto"
            />
            <p className="mt-9 mb-5 font-bold text-2xl md:text-[32px]">
              You&apos;re Registered!
            </p>
            <p>We have sent you an email for proof of</p>
            <p> registration and more information!</p>
          </div>
        </div>
      </div>
    );
  }
  if (open === HomeModalState.ONBOARDING) {
    if (!data?.email) return <></>;
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          zIndex: "500",
        }}
        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
      >
        {/* dexktop */}
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="hidden md:block rounded-3xl overflow-hidden relative w-[554px]"
        >
          <div className="px-20 lg:px-24 relative flex flex-col items-center z-20 bg-white p-8 overflow-y-scroll myscrollbar">
            <img
              src="/images/check_icon.svg"
              alt=""
              className="w-20 h-20 md:w-[114px] md:h-[114px]"
            />
            <p className="text-[24px] md:text-[32px] font-bold my-5 md:my-7 text-center">
              Account Created!
            </p>
            <OnboardingContent data={data} setSaved={setSaved} />
          </div>
        </div>

        {/* mobile */}
        <div className="md:hidden flex flex-col justify-center w-full h-full bg-white px-4 py-7">
          <img
            src="/images/leadseries_logo_putih_2.svg"
            alt=""
            className="w-[100px] fixed left-4 top-7"
          />
          <img
            src="/images/check_icon.svg"
            alt=""
            className="mx-auto w-20 h-20 my-8"
          />
          <p className="text-[24px] md:text-[32px] font-bold my-5 md:my-7 text-center">
            Account Created!
          </p>{" "}
          <OnboardingContent data={data} setSaved={setSaved} />
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={close}
      style={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        zIndex: "500",
      }}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="rounded-3xl overflow-hidden relative w-[816px]"
      >
        <div className="relative z-20 bg-white p-8 h-[95vh] overflow-y-scroll myscrollbar">
          <div
            onClick={close}
            className="text-black text-3xl font-black absolute right-7 top-7 cursor-pointer"
          >
            &#x2715;
          </div>
          {open === HomeModalState.LEADCOMP ? (
            <LeadCompContent />
          ) : (
            <LeadTalkContent openSuccess={onSuccess} />
          )}
        </div>
      </div>
    </div>
  );
};
