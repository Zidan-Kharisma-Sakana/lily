import { useState } from "react";
import { useForm } from "react-hook-form";
import { FieldWrapper } from "./FieldWrapper";

export interface ProfileFormProps {
  name: string;
  phone: string | number;
}
export const ProfileForm: React.FC<{
  data: ProfileFormProps;
}> = ({ data }) => {
  const { register, handleSubmit } = useForm<ProfileFormProps>({
    defaultValues: data,
  });
  const [changed, setChanged] = useState<boolean>(false);

  const checkChanges = (e: any) => {
    if (!changed) {
      setChanged(true);
    }
  };

  const onSubmit = (data: any) => {
    alert(data);
  };
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
          {...register("name", { required: true })}
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
