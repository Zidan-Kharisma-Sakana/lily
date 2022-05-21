/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { UserFormData } from ".";
import { shortenName } from "../../../helper";
import { Nav } from "../../../Nav";
import { JobProfileModalState } from "../JobDesc/JobProfile";
import { Autofilled } from "./Autofilled";
import { Confirmation } from "./Confirmation";

export const JobFormModal: FC<{
  state: JobProfileModalState;
  onApply: () => void;
  onClose: () => void;
  onSubmit: () => void;
  data: UserFormData;
}> = ({ state, onApply, onClose, data, onSubmit }) => {
  if (
    state === JobProfileModalState.DEFAULT ||
    state === JobProfileModalState.NOSHOW
  )
    return null;
  return (
    <div
      onClick={() => {
        if (state === JobProfileModalState.AUTOFILLED) onApply();
        else onClose();
      }}
      className="break-all fixed z-[100] top-0 left-0 w-screen h-screen flex justify-center items-center blur16px bg-[rgba(0,0,0,0.1)]"
    >
      {state === JobProfileModalState.AUTOFILLED ? (
        <Autofilled onApply={onApply} />
      ) : (
        <>
          <div
            onClick={(e) => e.stopPropagation()}
            className="hidden md:w-[681px] text-xs font-medium w-full mx-4 px-4 py-8 md:py-[36px] md:px-[90px] lg:py-[54px] lg:px-[112px] md:flex flex-col bg-white rounded-2xl"
          >
            <Confirmation data={data} onClose={onClose} onSubmit={onSubmit} />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="md:hidden w-screen overflow-hidden border relative z-20 bg-white p-8 h-screen overflow-y-scroll"
          >
            <Nav isHome={false} onBack={onClose} withBackButton />
            <div className="mt-24 break-normal">
              <Confirmation data={data} onClose={onClose} onSubmit={onSubmit} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
