/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { baseURLFE } from "../../utils/api";
import { AuthDec } from "./AuthDec";
import { AuthBox, AuthLayout } from "./AuthLayout";
import { AuthModal } from "./AuthModal";
import { CheckYourMail } from "./CheckYourMail";

export const SignUpForm: FC = () => {
  const r = useRouter();
  const [open, setOpen] = useState(false);
  const [auth_url, setAuth_url] = useState("");
  function close() {
    setOpen(false);
  }
  const { register, handleSubmit } = useForm();
  async function signup(p: any) {
    const t = toast.loading("Sending Verification Email ....");
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(p),
      headers: {
        "Content-type": "application/json",
      },
    });
    toast.dismiss(t);
    if (res.ok) {
      toast.success("Success");
      setOpen(true);
    } else {
      const data = await res.json();
      toast.error(`Error: ${data.message}`);
    }
  }

  useEffect(() => {
    const getURL = async () => {
      const res = await fetch(
        baseURLFE(
          "auth/o/google-oauth2/?redirect_uri=https://leadseries.id/processGoogle"
        ),
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      if (res.ok) {
        const url = data.authorization_url;
        setAuth_url(url);
      }
    };
    getURL();
  }, []);
  return (
    <AuthLayout>
      <AuthModal open={open} close={close}>
        <CheckYourMail close={close} email={""} />
      </AuthModal>
      <AuthBox>
        <form method="post" onSubmit={handleSubmit(signup)}>
          <h1 className="mt-[120px] mb-6 md:mt-0 md:mb-9 text-[40px] lg:text-[48px] font-bold">
            Sign Up
          </h1>
          <div className="w-full md:w-[390px] lg:w-[400px] xl:w-[420px]">
            <label htmlFor="name">Full name *</label>
            <input
              required
              className="mb-6 p-4 border rounded-lg w-full text-[#72777A] mt-2"
              type="text"
              {...register("full_name", { required: true })}
              id="name"
            />
            <label htmlFor="email">Email *</label>
            <input
              required
              className="mb-6 p-4 border rounded-lg w-full text-[#72777A] mt-2"
              type="text"
              {...register("email", { required: true })}
              id="email"
            />
            <label htmlFor="phone">Phone Number *</label>
            <input
              required
              className="mb-6 p-4 border rounded-lg w-full text-[#72777A] mt-2"
              type="text"
              {...register("phone", { required: true })}
              id="phone"
            />
            <label htmlFor="password">Password</label>
            <input
              required
              className="mb-6 p-4 border rounded-lg w-full text-[#72777A] mt-2"
              type="password"
              {...register("password", { required: true })}
              id="password"
            />{" "}
          </div>

          <div className="w-full mt-9">
            <button className="bg-[#724182] text-white text-center py-4 w-full rounded-[48px]">
              Create an account
            </button>
          </div>
        </form>
        <a
          href={auth_url}
          className="block w-full relative rounded-[48px] cursor-pointer py-4 border border-[#E3E5E6] mt-5 text-center text-ink-darkest font-medium"
        >
          <img src="/icons/Google.svg" alt="" className="absolute left-4" />
          <p>Continue with Google</p>
        </a>
        <p className="text-black font-semibold text-center mt-4 lg:mt-5 mb-10 md:mb-0">
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
