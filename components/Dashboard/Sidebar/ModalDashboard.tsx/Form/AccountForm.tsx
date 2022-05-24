import Cookies from "js-cookie";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FieldWrapper } from "./FieldWrapper";

export interface AccountFormProps {
  email: string;
}

export const AccountForm: React.FC<{
  data: AccountFormProps;
  close: () => void;
}> = ({ data, close }) => {
  const { register, handleSubmit } = useForm();

  async function onSubmit(obj: any) {
    const token = Cookies.get("token");
    const t = toast.loading("changing your password...");
    const res = await fetch("/api/dashboard/password", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    toast.dismiss(t);
    if (res.ok) {
      toast.success("Success");
      close();
    } else {
      const msg = await res.json();
      toast.error(msg.message ?? "Oops, something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="font-bold text-primary-darkest text-lg mb-3">
        Change Password
      </h4>
      <p className="sm:hidden mb-3">Old Password</p>
      <FieldWrapper py="16">
        <input
          className="w-full text-ink-lighter placeholder:text-white sm:placeholder:text-ink-lighter"
          {...register("old-password")}
          type="password"
          required
          placeholder="Old Password"
        />
      </FieldWrapper>
      <p className="sm:hidden mb-3">New Password</p>
      <FieldWrapper py="16">
        <input
          className="w-full text-ink-lighter placeholder:text-white sm:placeholder:text-ink-lighter"
          {...register("new-password")}
          type="password"
          required
          placeholder="New Password"
        />
      </FieldWrapper>
      <p className="sm:hidden mb-3">Re-enter New Password</p>
      <FieldWrapper py="16">
        <input
          className="w-full text-ink-lighter placeholder:text-white sm:placeholder:text-ink-lighter"
          {...register("reenter-new-password")}
          type="password"
          required
          placeholder="Re-enter New Password"
        />
      </FieldWrapper>
      <button
        className={`text-center w-full rounded-[48px] py-4 px-8 mb-3 font-medium bg-primary-base text-white cursor-pointer"
        }`}
      >
        Save Changes
      </button>
    </form>
  );
};
