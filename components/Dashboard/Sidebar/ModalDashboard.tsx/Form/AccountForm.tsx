import React from "react";
import { useForm } from "react-hook-form";
import { FieldWrapper } from "./FieldWrapper";

export interface AccountFormProps {
  email: string;
}

export const AccountForm: React.FC<{
  data: AccountFormProps;
}> = ({ data }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form action="">
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
