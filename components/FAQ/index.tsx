/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import styles from "./FAQ.module.css";
import { FAQBody, FAQBodyProps } from "./FAQBody";
import { FAQForm } from "./FAQForm";
import { FAQModal } from "./FAQModal";
export const FAQ: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <section
      id="faq"
      style={{
        background: "linear-gradient(106.11deg, #091A76 30.02%, #B8454D 122%)",
      }}
      className="rounded-t-[34px] relative pb-[60px] py-[60px] sm:pt-[80px] md:pt-[120px] px-4 sm:px-10 md:px-14 lg:px-28 xl:px-[121px] 2xl:px-[200px] lg:min-h-screen mt-12 overflow-hidden "
    >
      <FAQModal open={openModal} close={() => setOpenModal(false)}>
        <FAQForm />
      </FAQModal>
      <img
        src="/icons/faq_vector.svg"
        alt=""
        className="hidden sm:block absolute left-0 top-0 w-full z-10"
      />
      <Dec setOpenModal={setOpenModal} />
      <FAQBody {...FAQData} />
      <div className="text-xs sm:text-base md:text-lg lg:hidden flex items-center font-medium text-white">
        <p>Couldn&#39;t find what you&#39;re looking for?</p>
        <div
          onClick={() => setOpenModal(true)}
          style={{
            color: "#724182",
            background: "#FAEDF7",
            borderRadius: "48px",
          }}
          className="cursor-pointer font-normal py-2 px-4 ml-2 sm:ml-4 md:ml-6"
        >
          Ask Here
        </div>
      </div>
    </section>
  );
};

const Dec: FC<{ setOpenModal: React.Dispatch<boolean> }> = ({
  setOpenModal,
}) => {
  return (
    <>
      <div className={styles.bubble1} />
      <div className={styles.bubble2} />
      <div className={styles.bubble3} />
      <div className={styles.bubble4} />
      <div className={styles.bubble5} />
      <div className="absolute hidden lg:block -right-5 top-[312px] xl:right-[10%]">
        <img src="/images/faq_1.png" alt="" />
        <img
          onClick={() => setOpenModal(true)}
          src="/images/faq_2.png"
          alt=""
          className="absolute bottom-0 translate-y-20 left-0 xl:left-[140px] cursor-pointer"
        />
      </div>
    </>
  );
};

const FAQData: FAQBodyProps = {
  QnA: [
    {
      question: "Is the event offline or online?",
      answer: [
        "Workshop, Company Visit Day 1 (11 July), and LeadTalk Day 1 (14 July) will be conducted online through Zoom Meetings.",
        "Company Visit Day 2 (12 July) will be held offline at our company partner’s office and LeadTalk Day 2 (15 July) will be held offline at Balai Sidang Universitas Indonesia. Stay tuned on our social media for more information!",
        "Stay updated on our Instagram for the latest updates!"
      ],
    },
    {
      question: "How do I register and prepare for the event?",
      answer:
        "To register, you need to make an account by signing up. When you are successfully signed up, an email confirmation will be sent to you. Once you have an account, you are free to register for all the events!",
    },
    {
      question: "What is the cost of participating in this event?",
      answer: "All events, except for LeadComp, are completely free of charge.",
    },
    {
      question: "Can I invite my friends to attend the event?",
      answer:
        "To invite your friends, they need to sign up for an account on this website so that they can receive access to the event platform.",
    },
    {
      question:
        "For Job Fair, can participants who didn’t upload their CV apply for job listings?",
      answer:
        "Yes, participants can apply for the job listings without having to upload CV since it is not mandatory to upload one.",
    },
  ],
};
