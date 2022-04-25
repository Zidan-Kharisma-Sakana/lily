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

  return (
    <div className="text-white font-semibold text-[20px]">
      <h4 className="font-bold text-[28px]">If you have any questions,</h4>
      <h4 className="font-bold text-[28px]">please fill out the form below!</h4>
      <div className="my-6 flex justify-between w-[560px] xl:w-[614px]">
        <p>Name*</p>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="text-black px-2 py-0.5 rounded-lg text-base w-3/4"
        />
      </div>
      <div className="my-6 flex justify-between w-[560px] xl:w-[614px]">
        <p>Email*</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="text-black px-2 py-0.5 rounded-lg text-base w-3/4"
        />
      </div>
      <div className="my-6 flex justify-between w-[560px] xl:w-[614px]">
        <p>Question*</p>
        <div className="w-3/4 flex flex-col items-start">
          <textarea
            onChange={(e) => setQuestion(e.target.value)}
            rows={5}
            className="text-black px-2 py-0.5 rounded-lg text-base w-full "
          />
          <div
            className={`bg-[#B182B6] py-2 px-4 rounded-[48px] mt-7 flex font-medium text-base w-auto ${
              valid ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            <p>Submit &#8594;</p>
          </div>
        </div>
      </div>
    </div>
  );
};
