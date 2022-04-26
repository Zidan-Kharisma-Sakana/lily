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
        className="rounded-3xl w-full sm:w-auto overflow-hidden relative px-4 pr-8 sm:px-8 md:px-10 lg:px-0 "
      >
        {/* ini buat dekstop */}
        <img
          src="/images/blend.png"
          alt=""
          className="hidden lg:block absolute top-0 left-0 w-full h-full z-10"
        />
        <div className="hidden lg:block relative z-20">
          <div
            onClick={close}
            className="text-white text-3xl font-black absolute right-7 top-7 cursor-pointer"
          >
            &#x2715;
          </div>
          <div className="pt-16 pb-10 px-10 max-w-[741px] max-h-[588px] ">
            {children}
          </div>
        </div>
        {/* ini buat dekstop */}
        {/* ini buat mobile */}
        <div
          style={{
            boxShadow:
              "0px 0px 1px rgba(20, 20, 20, 0.08), 0px 1px 8px 2px rgba(20, 20, 20, 0.08)",
          }}
          className="bg-white rounded-3xl pt-12 pb-6 px-8 lg:hidden"
        >
          {children}
          <div
            onClick={close}
            className="text-[#724182] cursor-pointer text-xs sm:text-base md:text-lg mx-auto text-center font-medium w-[86%] max-w-[225px]"
          >
            Cancel
          </div>
        </div>
        {/* ini buat mobile */}
      </div>
    </div>
  );
};
