/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

export interface OnboardingContentProps {
  fullname: string;
  email: string;
  phone: string;
}
export const OnboardingContent: FC<{
  data: OnboardingContentProps;
  setSaved: () => void;
}> = ({ data: { email, fullname, phone }, setSaved }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: fullname,
      email: email,
      phone: "",
    },
  });

  const onSubmit = (e: any) => {
    setSaved();
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)} action="">
      <div className="mb-8 w-full">
        <p className="text-sm">Full Name *</p>
        <input
          className="rounded-lg border p-3 text-xs md:p-4 text-ink-lighter w-full"
          type="text"
          {...register("name")}
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
