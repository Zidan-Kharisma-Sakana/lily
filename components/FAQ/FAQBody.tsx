/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { FAQModal } from "./FAQModal";
export interface FAQBodyProps {
  QnA: { question: string; answer: string }[];
}
export const FAQBody: FC<FAQBodyProps> = ({ QnA }) => {
  const [chosen, setChosen] = useState<number>(-1);
  function onClick(idx: number) {
    if (idx === chosen) setChosen(-1);
    else setChosen(idx);
  }


  return (
    <div className="w-full lg:min-w-[550px] lg:w-[60%] text-white">
      <h4 className="font-bold text-2xl">Frequently Asked Questions</h4>
      <h5 className="font-bold text-[32px] mt-3">
        Find the answer to all of our most frequently asked questions.
      </h5>
      {QnA.map((data, idx) => (
        <FAQTab
          key={`faq-${idx}`}
          idx={idx}
          {...data}
          open={chosen === idx}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

const FAQTab: FC<{
  question: string;
  answer: string;
  onClick: (idx: number) => void;
  idx: number;
  open: boolean;
}> = (p) => {
  return (
    <div
      onClick={() => p.onClick(p.idx)}
      style={{
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(4px)",
      }}
      className="rounded-xl py-3.5 px-5 text-white overflow-hidden my-6 cursor-pointer"
    >
      <div className="relative pr-6 font-bold text-lg">
        <h6>{p.question}</h6>
        <img
          src="/icons/arrow_faq.svg"
          alt=""
          className={`absolute top-1/2 -translate-y-1/2 right-0 transition-all duration-300 transform ${
            p.open ? "-rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`font-medium transform transition-all ${
          p.open ? "py-2" : "h-0 text-transparent"
        }`}
      >
        <p>{p.answer}</p>
      </div>
    </div>
  );
};
