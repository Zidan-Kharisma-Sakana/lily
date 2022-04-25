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
      style={{
        background: "linear-gradient(106.11deg, #091A76 30.02%, #B8454D 122%)",
      }}
      className="relative px-28 xl:px-[121px] min-h-screen mt-12 overflow-hidden pt-[120px]"
    >
      <FAQModal open={openModal} close={() => setOpenModal(false)}>
        <div className="pt-16 pb-10 px-10 max-w-[741px] max-h-[588px] ">
          <FAQForm />
        </div>
      </FAQModal>
      <img
        src="/icons/faq_vector.svg"
        alt=""
        className="absolute left-0 top-0 w-full z-10"
      />
      <Dec setOpenModal={setOpenModal} />
      <FAQBody {...FAQData} />
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
      question: "Pertanyaan 1",
      answer:
        "Pertanyaan 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio porro ipsa facere recusandae ducimus, animi sit neque, labore omnis adipisci veniam. Placeat expedita facere ullam cupiditate beatae a voluptatum vitae.",
    },
    {
      question: "Pertanyaan 2",
      answer:
        "Pertanyaan 2 Lorem, Placeat expedita facere ullam cupiditate beatae a voluptatum vitae.",
    },
    {
      question: "Pertanyaan 3",
      answer:
        "Pertanyaan 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio porro ipsa facere recusandae ducimus, animi sit neque, labore omnis adipisci veniam. Placeat expedita facere ullam cupiditate beatae a voluptatum vitae.",
    },
    {
      question: "Pertanyaan 4",
      answer:
        "Pertanyaan 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio porro ipsa facere recusandae ducimus, animi sit neque, labore omnis adipisci veniam. Placeat expedita facere ullam cupiditate beatae a voluptatum vitae.",
    },
    {
      question: "Pertanyaan 5",
      answer:
        "Pertanyaan 5 Lorem,ore omnis adipisci veniam. Placeat expedita facere ullam cupiditate beatae a voluptatum vitae.",
    },
  ],
};
