import { FC } from "react";
import { shortenName } from "../../../helper";

/* eslint-disable @next/next/no-img-element */
export const Confirmation: FC<{
  data: any;
  onSubmit: () => void;
  onClose: () => void;
}> = ({ data, onSubmit, onClose }) => {
  return (
    <>
      <h3 className="text-2xl md:text-lg font-bold mb-2">Applicant Data Confirmation</h3>
      <p className="text-xs">
        This data will be sent to the company and cannot be changed
      </p>

      <div className="mt-7">
        <h5>Full name</h5>
        <p className="font-bold text-sm">
          {data.firstname} {data.lastname}
        </p>
      </div>
      <div className="md:flex justify-between items-start my-5 md:mt-7 mb-6">
        <div className="w-full md:w-[45%] mb-5 md:mb-0">
          <h5>Email</h5>
          <p className="font-bold text-sm">{data.email}</p>
        </div>
        <div className="w-full md:w-[45%]">
          <h5>Phone Number</h5>
          <p className="font-bold text-sm">{data.phone}</p>
        </div>
      </div>

      <div className="md:flex justify-between items-start">
        <div className="w-full md:w-[45%] mb-5 md:mb-0">
          <div className="flex justify-between items-center mb-1">
            <h4>Resume</h4>
            <img
              src="/icons/edit-button.svg"
              alt=""
              className="h-5 cursor-pointer"
              onClick={onClose}
            />
          </div>{" "}
          <div className="flex items-center break-all">
            <img src="/icons/berkas.svg" alt="" className="w-5 h-5 mr-1" />
            <p>{data.resumeFileName ?? "-"}</p>
          </div>{" "}
        </div>
        <div className="w-full mb-1 md:w-[45%]">
          <div className="flex justify-between items-center mb-1">
            <h4>Cover Letter</h4>
            <img
              src="/icons/edit-button.svg"
              alt=""
              className="h-5 cursor-pointer"
              onClick={onClose}
            />
          </div>{" "}
          <div className="flex items-center break-all">
            <img src="/icons/berkas.svg" alt="" className="w-5 h-5 mr-1" />
            <p>{data.cvFileName ?? "-"}</p>
          </div>
        </div>
      </div>
      <div className="border border-transparent border-t-[#C4C4C4] mt-7 py-7 text-xs font-medium">
        <div className="w-full md:w-[60%]">
          <div className="flex justify-between items-center">
            <h4>LinkedIn Account URL</h4>
            <img
              src="/icons/edit-button.svg"
              alt=""
              className="h-5 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <p className="font-bold text-sm mt-1">
            {shortenName(data.linkedin ?? "-", 25)}
          </p>
        </div>
        <div className="my-7 w-full md:w-[60%]">
          <div className="flex justify-between items-center">
            <h4>Website/Portfolio URL</h4>
            <img
              src="/icons/edit-button.svg"
              alt=""
              className="h-5 cursor-pointer"
              onClick={onClose}
            />
          </div>{" "}
          <p className="font-bold text-sm mt-1">
            {shortenName(data.portfolio ?? "-", 30)}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          onClick={onSubmit}
          className={`cursor-pointer rounded-[48px] text-center flex justify-center relative py-3 px-20  mx-auto bg-primary-base text-white cursor-pointer"
              }`}
        >
          <p> Submit Application</p>
          <img
            src="/icons/arrow_down.svg"
            alt=""
            className="transform -rotate-90 absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </>
  );
};
