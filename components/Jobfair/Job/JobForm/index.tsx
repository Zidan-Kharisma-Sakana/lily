/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { scrollKe, shortenName } from "../../../helper";
import { JobProfileModalState } from "../JobDesc/JobProfile";
import { JobFormModal } from "./JobFormModal";

export interface UserFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  resumeFileName: string;
  cvFileName?: string;
  linkedin?: string;
  portfolio?: string;
}
export const JobFairForm: FC<{
  data: UserFormData | null;
  apply: boolean;
  state: JobProfileModalState;
  setModal: React.Dispatch<JobProfileModalState>;
}> = ({ data, apply, state, setModal }) => {
  const [fname, setfname] = useState<string>("");
  const [lname, setlname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [linkedin, setlinkedin] = useState<string>("");
  const [portfolio, setportfolio] = useState<string>("");
  const [resumename, setresumename] = useState<string>("");
  const [cvname, setcvname] = useState<string>("");

  const onApply = () => {
    closeModal();
    setfname(data?.firstname ?? "aaa");
    setlname(data?.lastname ?? "");
    setemail(data?.email ?? "");
    setPhone(data?.phone ?? "");
    setlinkedin(data?.linkedin ?? "");
    setportfolio(data?.portfolio ?? "");
    setresumename(data?.resumeFileName ?? "");
    setcvname(data?.cvFileName ?? "");
    scrollKe("email_phone");
  };

  const openModalConfirmation = () => {
    setModal(JobProfileModalState.CONFIRMATION);
  };

  const closeModal = () => {
    setModal(JobProfileModalState.NOSHOW);
  };

  const [fileResume, setFileResume] = useState<File>();
  const [fileCV, setFileCV] = useState<File>();

  const onReject = (rejectedFiles: any, event: any) => {
    if (rejectedFiles.length > 1) {
      toast.error("You could only submit 1 file");
    } else {
      rejectedFiles[0].errors.forEach((err: any) => {
        switch (err.code) {
          case "file-too-large":
            return toast.error("File too large, maximum size is 5 mb");
          case "file-invalid-type":
            return toast.error(
              "Please submit file with extensions of .pdf or .zip"
            );
          default:
            return toast.error(err.message);
        }
      });
    }
  };
  const { getRootProps: rootPropsResume, getInputProps: inputPropsResume } =
    useDropzone({
      accept: { "application/pdf": [".pdf"], "application/zip": [".zip"] },
      maxFiles: 1,
      maxSize: 5 * 1024 * 1024,
      onDropAccepted: (acceptedFiles, event) => {
        setFileResume(acceptedFiles[0]);
        setresumename(acceptedFiles[0].name);
      },
      onDropRejected: onReject,
    });

  const { getRootProps: rootPropsCV, getInputProps: inputPropsCV } =
    useDropzone({
      accept: { "application/pdf": [".pdf"], "application/zip": [".zip"] },
      maxFiles: 1,
      maxSize: 5 * 1024 * 1024,
      onDropAccepted: (acceptedFiles, event) => {
        setFileCV(acceptedFiles[0]);
        setcvname(acceptedFiles[0].name);
      },
      onDropRejected: onReject,
    });

  const isReady = fname && email && phone && resumename;
  const readyData: UserFormData = {
    firstname: fname,
    lastname: lname,
    email: email,
    phone: phone,
    resumeFileName: resumename,
    cvFileName: cvname ?? "-",
    linkedin: linkedin ?? "-",
    portfolio: portfolio ?? "-",
  };
  const onSubmit = () => {
    closeModal();
  };
  return (
    <>
      <JobFormModal
        state={state}
        onApply={onApply}
        onClose={closeModal}
        onSubmit={onSubmit}
        data={readyData}
      />
      <div
        id="jobfairform"
        className="glassCardNoPad relative z-10 w-full py-[40px] px-[44px] xl:py-[74px] xl:px-[79px] my-4"
      >
        <h4 className="font-bold text-2xl">
          Submit your application form for this job here
        </h4>
        <p className="font-medium mt-2 max-w-[500px]">
          Complete this form and LeadSeries will send in your profile and resume
          with your application
        </p>
        <p className="font-medium"></p>

        <div className="mt-8">
          <div id="name" className="md:flex justify-between gap-x-7 items-end">
            <div className="w-full md:w-45%">
              <h6>Full Name*</h6>
              <input
                onChange={(e) => setfname(e.target.value)}
                type="text"
                name="firstname"
                placeholder="First Name"
                className="w-full p-4 bg-white text-[#72777A] rounded-lg mt-3"
                value={fname}
              />
            </div>
            <div className="mt-7 md:m-0 w-full md:w-45%">
              <h6></h6>
              <input
                onChange={(e) => setlname(e.target.value)}
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="w-full p-4 bg-white text-[#72777A] rounded-lg"
                value={lname}
              />
            </div>
          </div>

          <div
            id="email_phone"
            className="md:flex justify-between gap-x-7 items-end my-7 md:my-8"
          >
            <div className="w-full md:w-45%">
              <h6>Email *</h6>
              <input
                onChange={(e) => setemail(e.target.value)}
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 bg-white text-[#72777A] rounded-lg mt-3"
                value={email}
              />
            </div>
            <div className="mt-7 md:mt-0 w-full md:w-45%">
              <h6>Phone Number *</h6>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full md:w-45% p-4 bg-white text-[#72777A] rounded-lg mt-3"
                value={phone}
              />
            </div>
          </div>

          <div
            id="files"
            className="md:flex justify-between gap-x-7 items-end my-8"
          >
            <div className="w-full md:w-45%">
              <h6>Resume *</h6>
              <div
                {...rootPropsResume({
                  className: `w-full rounded-lg h-20 mt-3 cursor-pointer`,
                })}
              >
                <input {...inputPropsResume()} />
                <div
                  className={`${
                    !!fileResume || resumename
                      ? "border-2 border-green-base bg-green-lightest"
                      : "bg-white"
                  } w-full h-16 px-4 rounded-lg flex items-center`}
                >
                  {!!fileResume || resumename ? (
                    <div className="flex gap-x-2">
                      <img
                        src="/icons/file-green.svg"
                        alt=""
                        className="h-4 w-4"
                      />
                      <p className="text-xs text-ink-lighter">
                        {shortenName(resumename, 20)}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-x-2 justify-center items-center">
                      <img
                        src="/icons/arrow-up.svg"
                        alt=""
                        className="h-4 w-4"
                      />
                      <p className="text-xs text-ink-lighter">
                        Drag and drop or{" "}
                        <span className="text-base md:text-xs underline text-primary-base ">
                          Upload File
                        </span>{" "}
                      </p>
                    </div>
                  )}
                </div>
                {!!fileResume || resumename ? (
                  <p className="text-xs underline text-primary-base mt-2">
                    Change File
                  </p>
                ) : (
                  <p className="text-xs text-ink-lighter mt-2 ">
                    No File Selected
                  </p>
                )}
              </div>
            </div>

            <div className="w-full md:w-45% mt-7 md:mt-0">
              <div className="flex items-center">
                <h5>Cover Letter</h5>
                <div className="bg-sky-light text-sky-dark px-2 py-0.5 ml-3 text-xs rounded-[24px]">
                  Optional
                </div>
              </div>{" "}
              <div
                {...rootPropsCV({
                  className: `w-full rounded-lg h-20 mt-3 cursor-pointer`,
                })}
              >
                <input {...inputPropsCV()} />
                <div
                  className={`${
                    !!fileCV || cvname
                      ? "border-2 border-green-base bg-green-lightest"
                      : "bg-white"
                  } w-full h-16 px-4 rounded-lg flex items-center`}
                >
                  {!!fileCV || cvname ? (
                    <div className="flex gap-x-2">
                      <img
                        src="/icons/file-green.svg"
                        alt=""
                        className="h-4 w-4"
                      />
                      <p className="text-xs text-ink-lighter">
                        {shortenName(cvname, 20)}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-x-2 justify-center items-center">
                      <img
                        src="/icons/arrow-up.svg"
                        alt=""
                        className="h-4 w-4"
                      />
                      <p className="text-xs text-ink-lighter">
                        <span className="hidden md:inline">
                          Drag and drop or{" "}
                        </span>
                        <span className="text-base md:text-xs underline text-primary-base ">
                          Upload File
                        </span>{" "}
                      </p>
                    </div>
                  )}
                </div>
                {!!fileCV || cvname ? (
                  <p className="text-xs underline text-primary-base mt-2">
                    Change File
                  </p>
                ) : (
                  <p className="text-xs text-ink-lighter mt-2 ">
                    No File Selected
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border border-transparent border-t-[#C4C4C4] pt-8">
          <div className="flex items-center">
            <h5>Linkedin Account</h5>
            <div className="bg-sky-light text-sky-dark px-2 py-0.5 ml-3 text-xs rounded-[24px]">
              Optional
            </div>
          </div>
          <input
            onChange={(e) => setlinkedin(e.target.value)}
            type="text"
            name="linkedin"
            id=""
            className="w-full md:w-45% p-4 bg-white text-[#72777A] rounded-lg mt-3"
            value={linkedin}
          />
          <div className="flex items-center mt-8">
            <h5>Website/Portfolio</h5>
            <div className="bg-sky-light text-sky-dark px-2 py-0.5 ml-3 text-xs rounded-[24px]">
              Optional
            </div>
          </div>{" "}
          <input
            onChange={(e) => setportfolio(e.target.value)}
            type="text"
            name="portfolio"
            id=""
            className="w-full md:w-45% p-4 bg-white text-[#72777A] rounded-lg mt-3"
            value={portfolio}
          />
        </div>
        <div className="w-full flex justify-center mt-12">
          <div
            onClick={() => isReady && openModalConfirmation()}
            className={`rounded-[48px] text-center flex justify-center relative py-3 px-20  mx-auto ${
              isReady
                ? "bg-primary-base text-white cursor-pointer"
                : "bg-sky-light text-sky-dark cursor-not-allowed"
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
      </div>{" "}
    </>
  );
};
