/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { FAQModal } from "./FAQModal";
export interface FAQBodyProps {
  QnA: { question: string; answer: string }[];
}
export const FAQBody: FC<FAQBodyProps> = ({ QnA }) => {
  return (
    <div className="w-full lg:min-w-[550px] lg:w-[60%] text-white">
      <h4 className="font-bold text-lg sm:text-xl lg:text-2xl">
        Frequently Asked Questions
      </h4>
      <h5 className="w-3/4 mb-4 sm:w-full sm:font-bold text-sm sm:text-2xl lg:text-[32px] md:mt-3">
        Find the answer to all of our most frequently asked questions.
      </h5>
      {QnA.map((data, idx) => (
        <FAQTab key={`faq-${idx}`} {...data} />
      ))}
    </div>
  );
};

const FAQTab: FC<{
  question: string;
  answer: string;
}> = (p) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(4px)",
      }}
      className="rounded-xl py-4 px-2.5 sm:py-3.5 sm:px-5 text-white overflow-hidden my-3 sm:my-4 lg:my-6 cursor-pointer"
    >
      <div className=" relative pr-10 sm:pr-8 font-bold text-sm sm:text-base md:text-lg">
        <h6>{p.question}</h6>
        <img
          src="/icons/arrow_faq.svg"
          alt=""
          className={`absolute top-1/2 -translate-y-1/2 right-4 sm:right-0 transition-all duration-300 transform ${
            open ? "-rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`text-xs sm:text-sm md:text-base font-medium ${
          open ? "max-h-none" : "max-h-0 text-transparent"
        }`}
      >
        <p>{p.answer}</p>
      </div>
    </div>
  );
};
