/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const Autofilled: FC<{ onApply: any }> = (props) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[328px] py-8 px-16 flex flex-col items-center bg-white rounded-2xl"
    >
      <img
        src="/icons/autofill.svg"
        alt=""
        className="w-[113px] h-[113px] mx-auto mb-7"
      />
      <h3 className="font-bold text-2xl mb-1">Auto-filled</h3>
      <p className="text-sm font-medium text-center">
        LeadSeries has auto-filled your application form based on your profile
        details.
      </p>
      <div
        onClick={props.onApply}
        className="flex gap-x-2 mx-auto px-4 items-center mt-7 text-primary-base cursor-pointer"
      >
        <p>Continue</p>
        <img src="/icons/arrow-right.svg" alt="" className="w-4 h-4" />
      </div>
    </div>
  );
};
