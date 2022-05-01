/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const ForgetPassword: FC<{ close: () => void }> = ({ close }) => {
  const { register, handleSubmit } = useForm();
  async function sendResetPassword(obj: any) {
    const t = toast.loading("Requesting reset password...");
    const res = await fetch("/api/forget-password", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.dismiss(t);
    if (res.ok) {
      toast.success("Success");
      close();
    } else {
      toast.error("Oops, something went wrong");
    }
  }
  return (
    <div className="bg-white font-medium w-screen h-screen md:h-auto md:w-[422px] text-[#090A0A] flex flex-col justify-center items-center p-8">
      <img src="/images/mail.png" alt="email" className="mt-6" />
      <h4 className="font-bold text-3xl text-center mt-7 mb-4">
        Forget Password
      </h4>
      <p className="text-center text-xl md:text-base font-medium">
        Enter your email address and we will share a link to create a new
        password.
      </p>
      <form action="" onSubmit={handleSubmit(sendResetPassword)}>
        <input
          type="email"
          {...register("email")}
          required
          id="email"
          className="w-full border rounded-lg mt-7 mb-6 p-4 text-[#72777A]"
        />
        <div className="w-full rounded-[48px] justify-center gap-x-2 cursor-pointer flex py-2 px-4 mr-2 text-white bg-[#724182]">
          <img src="/icons/send.svg" alt="" />
          <p>Send</p>
        </div>
      </form>
    </div>
  );
};
