/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC } from "react";

export const ChangePassword: FC<{ close: () => void }> = ({ close }) => {
  const r = useRouter();
  function tutup() {
    close();
    r.push("/");
  }
  function sendChangePassword() {
    tutup();
  }
  return (
    <div className="bg-white font-medium w-screen h-screen md:h-auto md:w-[422px] text-[#090A0A] flex flex-col justify-center p-8">
      <h4 className="font-bold text-lg mt-7 mb-4">Change Password</h4>
      <div className="w-full">
        <label htmlFor="old-password">Old Password</label>
        <input
          className="p-4 border rounded-lg w-full text-[#72777A] mt-2"
          type="password"
          name="old-password"
          id="old-password"
        />
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
        onClick={sendChangePassword}
        className="justify-center rounded-[48px] gap-x-2 cursor-pointer flex py-2 px-4 my-4 text-white bg-[#724182]"
      >
        <p>Change Password</p>
      </div>
      <div
        onClick={tutup}
        className="justify-center rounded-[48px] gap-x-2 cursor-pointer flex py-2 px-4 bg-white text-[#724182]"
      >
        <p>Cancel</p>
      </div>
    </div>
  );
};
