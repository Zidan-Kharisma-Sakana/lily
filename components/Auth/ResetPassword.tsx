/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC } from "react";

export const ResetPassword: FC<{ close: () => void }> = ({ close }) => {
  const r = useRouter()
  function sendResetPassword() {
    close();
    r.push('/sign-in')
  }
  return (
    <div className="bg-white font-medium w-screen h-screen md:h-auto md:w-[422px] text-[#090A0A] flex flex-col justify-center p-8">
      <h4 className="font-bold text-lg mt-7 mb-4">
        Reset Password
      </h4>
      <div className="w-full">
        <label htmlFor="new-password">New Password</label>
        <input
          className="p-4 border rounded-lg w-full text-[#72777A] mt-2"
          type="password"
          name="new-password"
          id="new-password"
        />{" "}
        <label htmlFor="reenter-new-password">Re-enter New Password</label>
        <input
          className="p-4 border rounded-lg w-full text-[#72777A] mt-2"
          type="password"
          name="reenter-new-password"
          id="reenter-new-password"
        />
      </div>
      <div
        onClick={sendResetPassword}
        className="justify-center rounded-[48px] gap-x-2 cursor-pointer flex py-2 px-4 my-4 text-white bg-[#724182]"
      >
        <p>Change Password</p>
      </div>
      <div
        onClick={close}
        className="justify-center rounded-[48px] gap-x-2 cursor-pointer flex py-2 px-4 bg-white text-[#724182]"
      >
        <p>Cancel</p>
      </div>
    </div>
  );
};
