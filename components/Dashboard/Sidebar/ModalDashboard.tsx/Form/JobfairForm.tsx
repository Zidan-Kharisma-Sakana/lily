import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FieldWrapper } from "./FieldWrapper";
import { useDropzone } from "react-dropzone";
import { shortenName } from "../../../../helper";
import toast from "react-hot-toast";

export interface JobFairFormProps {
  title: string;
  filename: string;
  link: string;
}

export const JobFairForm: React.FC<{
  data: JobFairFormProps[];
}> = ({ data }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      cv: null,
      linkedin: data[1].link,
      portfolio: data[2].link,
    },
  });
  const [changed, setChanged] = useState<boolean>(false);
  const [filename, setFileName] = useState<string>(data[0].filename);
  const [file, setFile] = useState<File>();

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"], "application/zip": [".zip"] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    onDropAccepted: (acceptedFiles, event) => {
      setFile(acceptedFiles[0]);
      setFileName(acceptedFiles[0].name);
      setChanged(true);
    },
    onDropRejected: (rejectedFiles, event) => {
      if (rejectedFiles.length > 1) {
        toast.error("You could only submit 1 file");
      } else {
        rejectedFiles[0].errors.forEach((err) => {
          switch (err.code) {
            case "file-too-large":
              return toast.error("File too large, maximum size is 5 mb");
            case "file-invalid-type":
              return toast.error("Please submit file with extensions of .pdf or .zip");
            default:
              return toast.error(err.message);
          }
        });
      }
    },
  });

  const checkChanges = (e: any) => {
    if (!changed) {
      setChanged(true);
    }
  };

  const onSubmit = (data: any) => {
    alert(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="font-bold text-primary-darkest text-lg mb-3">
        Edit Job Fair Profile
      </h4>
      <FieldWrapper py="8">
        <p className="text-ink-light text-xs">Curriculum Vitae</p>
        <div className="flex justify-between items-start">
          <span className="text-ink-lighter font-medium my-2 max-w-[161px] overflow-hidden hidden sm:inline">
            {shortenName(filename, 16)}
          </span>
          <span className="text-ink-lighter font-medium my-2 overflow-hidden sm:hidden">
            {shortenName(filename, 20)}
          </span>
          <div
            {...getRootProps({
              className:
                "px-4 py-2 bg-primary-base rounded-[48px] text-xs text-white cursor-pointer",
            })}
          >
            <input {...getInputProps()} />
            <p>Change File</p>
          </div>
        </div>
      </FieldWrapper>
      <FieldWrapper py="8">
        <p className="text-ink-light text-xs">Linkedin Account URL</p>
        <input
          onKeyDown={checkChanges}
          className="w-full"
          {...register("linkedin", { required: true })}
          type="text"
        />
      </FieldWrapper>
      <FieldWrapper py="8">
        <p className="text-ink-light text-xs">Website/Portfolio URL</p>
        <input
          onKeyDown={checkChanges}
          className="w-full"
          {...register("portfolio", { required: true })}
          type="text"
        />
      </FieldWrapper>
      <button
        className={`text-center w-full rounded-[48px] py-4 px-8 mb-3 font-medium ${
          changed
            ? "bg-primary-base text-white cursor-pointer"
            : "text-sky-dark bg-sky-light cursor-not-allowed"
        }`}
      >
        Save Changes
      </button>
    </form>
  );
};
