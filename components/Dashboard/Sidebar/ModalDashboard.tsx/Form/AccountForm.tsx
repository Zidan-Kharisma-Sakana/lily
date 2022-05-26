import Cookies from "js-cookie";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { baseURL, baseURLFE } from "../../../../../utils/api";
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
    if (obj.new_password != obj.reenter_password) {
      toast.error("reentered password didn't match");
      return;
    }
    const token = Cookies.get("token");
    const t = toast.loading("changing your password...");
    const form = new FormData();
    form.append("new_password", obj.new_password);
    form.append("current_password", obj.old_password);
    const res = await fetch(baseURLFE("auth/users/set_password/"), {
      method: "POST",
      body: form,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    toast.dismiss(t);
    if (res.ok) {
      toast.success("Success");
      close();
    } else {
      const data = await res.json();
      for (var key in data) {
        if (Array.isArray(data[key])) {
          data[key].forEach((detail) => toast.error(detail));
        } else {
          toast.error(data[key]);
        }
      }
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
          {...register("old_password")}
          type="password"
          required
          placeholder="Old Password"
        />
      </FieldWrapper>
      <p className="sm:hidden mb-3">New Password</p>
      <FieldWrapper py="16">
        <input
          className="w-full text-ink-lighter placeholder:text-white sm:placeholder:text-ink-lighter"
          {...register("new_password")}
          type="password"
          required
          placeholder="New Password"
        />
      </FieldWrapper>
      <p className="sm:hidden mb-3">Re-enter New Password</p>
      <FieldWrapper py="16">
        <input
          className="w-full text-ink-lighter placeholder:text-white sm:placeholder:text-ink-lighter"
          {...register("reenter_password")}
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
