/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { HomeModalState } from "../../pages";
import { LeadCompContent } from "./ModalBody/LeadCompContent";
import { LeadTalkContent } from "./ModalBody/LeadTalkContent";

export const HomeModal: FC<{
  open: HomeModalState;
  close: () => void;
  children?: React.ReactNode;
}> = ({ open, close, children }) => {
  if (open === HomeModalState.NOSHOW) return <></>;
  return (
    <div
      onClick={close}
      style={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        zIndex: "500",
      }}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="rounded-3xl overflow-hidden relative w-[816px]"
      >
        <div className="relative z-20 bg-white p-8 h-[95vh] overflow-y-scroll myscrollbar">
          <div
            onClick={close}
            className="text-black text-3xl font-black absolute right-7 top-7 cursor-pointer"
          >
            &#x2715;
          </div>
          {open === HomeModalState.LEADCOMP ? <LeadCompContent /> : <LeadTalkContent />}
        </div>
      </div>
    </div>
  );
};
