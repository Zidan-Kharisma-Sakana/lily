import { useRouter } from "next/router";
import { FC, useState } from "react";
import { AuthDec } from "./AuthDec";
import { AuthBox, AuthLayout } from "./AuthLayout";
import { AuthModal } from "./AuthModal";
import { CheckYourMail } from "./CheckYourMail";

export const SignUpForm: FC = () => {
  const r = useRouter();
  const [open, setOpen] = useState(false);
  function close() {
    setOpen(false);
  }
  function createAnAccount() {
    setOpen(true);
  }
  return (
    <AuthLayout>
      <AuthModal open={open} close={close}>
        <CheckYourMail close={close} email={""} />
      </AuthModal>
      <AuthBox>
        <h1 className="mt-[120px] mb-6 md:mt-0 md:mb-9 text-[40px] lg:text-[48px] font-bold">
          Sign Up
        </h1>
        <div className="w-full md:w-[390px] lg:w-[400px] xl:w-[420px]">
          <label htmlFor="name">Full name *</label>
          <input
            className="mb-6 p-4 border rounded-lg w-full text-[#72777A] mt-2"
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="email">Email *</label>
          <input
            className="mb-6 p-4 border rounded-lg w-full text-[#72777A] mt-2"
            type="text"
            name="email"
            id="email"
          />
          <label htmlFor="phone">Phone Number *</label>
          <input
            className="mb-6 p-4 border rounded-lg w-full text-[#72777A] mt-2"
            type="text"
            name="phone"
            id="phone"
          />
          <label htmlFor="password">Password</label>
          <input
            className="mb-6 p-4 border rounded-lg w-full text-[#72777A] mt-2"
            type="password"
            name="password"
            id="password"
          />{" "}
        </div>

        <div className="w-full mt-9">
          <button
            onClick={createAnAccount}
            className="bg-[#724182] text-white text-center py-4 w-full rounded-[48px]"
          >
            Create an account
          </button>
        </div>
        <p className="text-black font-semibold text-center mt-4 lg:mt-5">
          Have an account?
          <span
            onClick={() => r.push("/sign-in")}
            className="text-[#724182] underline cursor-pointer ml-2"
          >
            Sign In
          </span>
        </p>
      </AuthBox>
    </AuthLayout>
  );
};
