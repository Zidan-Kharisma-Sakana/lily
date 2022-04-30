/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";

export const FAQForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (valid && (!name || !email || !question)) {
      setValid(false);
    } else if (!valid && name && email && question) {
      setValid(true);
    }
  }, [name, email, question, valid]);

  async function submitQuestion() {
    const formData = new FormData();
    formData.append("name", "Zidan");
    formData.append("email", "Zidan@gmail.com");
    formData.append("question", "Test 123");
    console.log(formData);
    fetch("http://localhost:3000/api/question", {
      method: "PUT",
      body: formData,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  return (
    <form
      method="POST"
      action="/api/question"
      className="text-black font-semibold text-[20px]"
    >
      <h4 className="font-bold text-base sm:text-lg md:text-xl lg:text-[28px]">
        If you have any questions,
      </h4>
      <h4 className="font-bold lg:mt-3 text-base sm:text-lg md:text-xl lg:text-[28px]">
        please fill out the form below!
      </h4>
      <div className="text-xs sm:text-sm my-2.5 sm:my-4 lg:my-6 flex flex-col lg:flex-row justify-between w-full lg:w-[560px] xl:w-[614px]">
        <p className="font-medium lg:font-semibold mb-2.5 md:mb-4 lg:mb-0">
          Name*
        </p>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="text-black px-2 py-0.5 rounded-lg text-base w-full lg:w-3/4 border"
        />
      </div>
      <div className="text-xs sm:text-sm  my-2.5 sm:my-4 lg:my-6 flex flex-col lg:flex-row justify-between w-full lg:w-[560px] xl:w-[614px]">
        <p className="font-medium lg:font-semibold mb-2.5 md:mb-4 lg:mb-0">
          Email*
        </p>
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="text-black px-2 py-0.5 rounded-lg text-base w-full lg:w-3/4 border"
        />
      </div>
      <div className="text-xs sm:text-sm my-2.5 sm:my-4 lg:my-6 flex flex-col lg:flex-row  justify-between w-full lg:w-[560px] xl:w-[614px]">
        <p className="font-medium lg:font-semibold mb-2.5 md:mb-4 lg:mb-0">
          Question*
        </p>
        <div className="w-full lg:w-3/4 flex flex-col items-start">
          <textarea
            name="question"
            onChange={(e) => setQuestion(e.target.value)}
            rows={5}
            className="text-black px-2 py-0.5 rounded-lg text-base w-full border"
          />
          <button
            className={`bg-[#B182B6] text-xs sm:text-base md:text-lg lg:pr-9 relative mx-auto lg:mx-0 justify-center text-white  py-2 px-4 rounded-[48px] mt-7 flex font-medium lg:text-base w-[86%] max-w-[225px] lg:max-w-none lg:w-auto ${
              valid ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            <p>Submit</p>
            <img
              src="/icons/arrow_down.svg"
              alt=""
              className="absolute right-4 lg:right-2 top-1/2 transform -translate-y-1/2 -rotate-90"
            />
          </button>
        </div>
      </div>
    </form>
  );
};
