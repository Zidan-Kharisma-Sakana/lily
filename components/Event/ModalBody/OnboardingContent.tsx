/* eslint-disable @next/next/no-img-element */
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export interface OnboardingContentProps {
  email: string;
}
export const OnboardingContent: FC<{
  data: OnboardingContentProps;
  setSaved: () => void;
}> = ({ data: { email }, setSaved }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      full_name: "",
      email: email,
      phone: "",
    },
  });

  async function onSubmit(obj: any) {
    const token = Cookies.get("token");
    const t = toast.loading("changing your profile...");
    const res = await fetch("/api/dashboard/profile", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const msg = await res.json();
    toast.dismiss(t);
    if (res.ok) {
      toast.success("Success");
      setSaved();
    } else {
      toast.error(msg.message ?? "Oops, something went wrong");
    }
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)} action="">
      <div className="mb-8 w-full">
        <p className="text-sm">Full Name *</p>
        <input
          className="rounded-lg border p-3 text-xs md:p-4 text-ink-lighter w-full"
          type="text"
          {...register("full_name")}
          required
        />
      </div>
      <div className="mb-8 w-full">
        <p className="text-sm">Email *</p>
        <input
          className="rounded-lg border p-3 text-xs md:p-4 text-ink-lighter w-full"
          type="email"
          {...register("email")}
          required
          disabled
        />
      </div>
      <div className="mb-8 w-full">
        <p className="text-sm">Phone Number *</p>
        <input
          className="rounded-lg border p-3 text-xs md:p-4 text-ink-lighter w-full"
          type="text"
          {...register("phone")}
          required
        />
      </div>
      <button className="block w-full py-3 bg-primary-base text-white text-center rounded-[24px]">
        Save
      </button>
    </form>
  );
};
