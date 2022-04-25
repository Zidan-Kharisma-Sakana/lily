/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const FAQModal: FC<{
  open: boolean;
  close: () => void;
  children?: React.ReactNode;
}> = ({ open, close, children }) => {
  if (!open) return <></>;
  return (
    <div
      onClick={close}
      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="rounded-3xl overflow-hidden relative"
      >
        <img
          src="/images/blend.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full z-10"
        />
        <div className="relative z-20">
          <div
            onClick={close}
            className="text-white text-3xl font-black absolute right-7 top-7 cursor-pointer"
          >
            &#x2715;
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
