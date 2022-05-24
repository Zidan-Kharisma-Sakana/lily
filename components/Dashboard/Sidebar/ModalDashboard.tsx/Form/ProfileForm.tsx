import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FieldWrapper } from "./FieldWrapper";

export interface ProfileFormProps {
  name: string;
  phone: string | number;
}
export const ProfileForm: React.FC<{
  data: ProfileFormProps;
  close: () => void;
}> = ({ data, close }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      full_name: data.name,
      phone: data.phone,
    },
  });
  const [changed, setChanged] = useState<boolean>(false);

  const checkChanges = (e: any) => {
    if (!changed) {
      setChanged(true);
    }
  };

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
        Edit Profile
      </h4>
      <p className="sm:hidden">Nama</p>
      <FieldWrapper py="8">
        <p className="text-ink-light text-xs hidden sm:block">Nama</p>
        <input
          onKeyDown={checkChanges}
          className="w-full"
          {...register("full_name", { required: true })}
          type="text"
        />
      </FieldWrapper>
      <p className="sm:hidden">Phone Number</p>
      <FieldWrapper py="8">
        <p className="text-ink-light text-xs hidden sm:block">Phone Number</p>
        <input
          onKeyDown={checkChanges}
          className="w-full"
          {...register("phone", { required: true })}
          type="text"
        />
      </FieldWrapper>
      <button
        className={`text-center w-full rounded-[48px] py-4 px-8 mb-3 font-medium ${
          changed
            ? "bg-primary-base text-white cursor-pointer"
            : "text-sky-dark bg-sky-light cursor-not-allowed"
        }`}
      >
        Save Changes
      </button>
    </form>
  );
};
