/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const CheckYourMail: FC<{ email: string; close: () => void }> = ({
  email,
  close,
}) => {
  function sendAnotherEmail() {
    close();
  }
  return (
    <div className="bg-white font-medium w-screen h-screen md:h-auto md:w-[422px] text-[#090A0A] flex flex-col justify-center items-center p-8">
      <img src="/images/mail.png" alt="email" className="mt-6" />
      <h4 className="font-bold text-3xl text-center mt-7 mb-4">
        Check Your Mail
      </h4>
      <p className="text-center font-medium">We have sent you an account</p>
      <p className="text-center font-medium">confirmation mail</p>
      <div className="text-center text-xs mt-32 md:mt-10">
        <p>Didn&apos;t receive the email? </p>
        <p onClick={sendAnotherEmail} className="text-[#724182] cursor-pointer">
          Send me another email please
        </p>
      </div>
    </div>
  );
};
