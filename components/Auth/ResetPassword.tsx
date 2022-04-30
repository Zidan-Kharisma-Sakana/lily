/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const ResetPassword: FC<{ close: () => void }> = ({ close }) => {
  const r = useRouter();
  const { register, handleSubmit } = useForm();
  function tutup() {
    close();
    r.push("/sign-in");
  }
  async function sendResetPassword(obj: any) {
    const { uid, token } = r.query;
    if(obj['new_password'] !== obj['re_new_password']) {
      toast.error("The password you re-entered is incorrect")
      return
    }
    if (uid && token) {
      const t = toast.loading("Resetting your password...");
      const res = await fetch("/api/reset-password", {
        method: "POST",
        body: JSON.stringify({ ...obj, uid, token }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.dismiss(t);
      if (res.ok) {
        toast.success("Success");
        tutup();
      } else {
        const data = await res.json();
        toast.error(data.message ?? "Oops, something went wrong");
      }
    }
  }
  return (
    <div className="bg-white font-medium w-screen h-screen md:h-auto md:w-[422px] text-[#090A0A] flex flex-col justify-center p-8">
      <h4 className="font-bold text-lg mt-7 mb-4">Reset Password</h4>
      <form className="w-full" onSubmit={handleSubmit(sendResetPassword)}>
        <label htmlFor="new-password">New Password</label>
        <input
          required
          className="p-4 border rounded-lg w-full text-[#72777A] mt-2"
          type="password"
          {...register("new_password")}
          id="new_password"
        />{" "}
        <label htmlFor="reenter-new-password">Re-enter New Password</label>
        <input
          required
          className="p-4 border rounded-lg w-full text-[#72777A] mt-2"
          type="password"
          {...register("re_new_password")}
          id="re-new_password"
        />
        <button className="w-full justify-center rounded-[48px] gap-x-2 cursor-pointer flex py-2 px-4 my-4 text-white bg-[#724182]">
          <p>Change Password</p>
        </button>
      </form>

      <div
        onClick={tutup}
        className="justify-center rounded-[48px] gap-x-2 cursor-pointer flex py-2 px-4 bg-white text-[#724182]"
      >
        <p>Cancel</p>
      </div>
    </div>
  );
};
