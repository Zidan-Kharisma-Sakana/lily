import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { AuthDec } from "./AuthDec";
import { AuthBox, AuthLayout } from "./AuthLayout";
import { AuthModal } from "./AuthModal";
import { ChangePassword } from "./ChangePassword";
import { ForgetPassword } from "./ForgetPassword";
import { ResetPassword } from "./ResetPassword";
import { useForm } from "react-hook-form";
export const SignInForm: FC<{ ModalComponent?: "RESET" | "CHANGE" }> = ({
  ModalComponent,
}) => {
  const r = useRouter();
  const [open, setOpen] = useState(!!ModalComponent);
  const { register, handleSubmit } = useForm();
  const onSubmit = (p: any) => {
    login(p.email, p.password);
  };
  function close() {
    setOpen(false);
  }
  const { login, user } = useAuth();
  return (
    <AuthLayout>
      <AuthModal open={open} close={close} preventClose={!!ModalComponent}>
        {!ModalComponent ? (
          <ForgetPassword close={close} />
        ) : ModalComponent === "CHANGE" ? (
          <ChangePassword close={close} />
        ) : (
          <ResetPassword close={close} />
        )}
      </AuthModal>
      <AuthBox>
        <h1 className="mt-[120px] mb-6 md:mt-0 md:mb-9 text-[40px] lg:text-[48px] font-bold">
          Sign In
        </h1>
        <div className="w-full md:w-[390px] lg:w-[400px] xl:w-[420px]">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
              className="p-4 border rounded-lg w-full text-[#72777A] mt-2"
              type="email"
              {...register("email", { required: "email may not be empty" })}
              id="email"
            />
            <div className="flex items-baseline justify-between mt-8">
              <label htmlFor="password">Password</label>
              <p
                onClick={() => setOpen(true)}
                className="text-[#979C9E] cursor-pointer text-sm"
              >
                Forgot Your Password?
              </p>
            </div>
            <input
              className="p-4 border rounded-lg w-full text-[#72777A] mt-2"
              type="password"
              {...register("password", {
                required: "password may not be empty",
              })}
              id="password"
            />
            <div className="w-full mt-9">
              <input
                type="submit"
                value="Sign in"
                className="bg-[#724182] text-white text-center py-4 w-full rounded-[48px]"
              />
            </div>
          </form>
        </div>

        <p className="text-black font-semibold text-center mt-4 lg:mt-5">
          Doesn&#39;t have an account?
          <span
            onClick={() => r.push("/sign-up")}
            className="text-[#724182] underline cursor-pointer ml-2"
          >
            Sign Up
          </span>{" "}
        </p>
      </AuthBox>
    </AuthLayout>
  );
};
