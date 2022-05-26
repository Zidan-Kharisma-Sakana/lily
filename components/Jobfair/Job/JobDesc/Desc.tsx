import { FC } from "react";

export const JobAbout: FC<{ data: string }> = ({ data }) => {
  return (
    <div className="w-full mt-7 lg:mt-8 font-medium flex flex-col gap-y-2">
      <h5 className="text-lg font-bold">About the role</h5>
      <div className="flex flex-col gap-y-2 font-medium text-justify" dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export const JobActivity: FC<{ data: string }> = ({ data }) => {
  return (
    <div className="w-full mt-7 lg:mt-8 font-medium">
      <h5 className="text-lg font-bold mb-2">What you will do</h5>
      <div className="flex flex-col gap-y-2 font-medium text-justify" dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export const JobLooking: FC<{ data: string }> = ({ data }) => {
  return (
    <div className="w-full mt-7 lg:mt-8">
      <h5 className="text-lg font-bold mb-2">What we&apos;re looking for</h5>
      <div className="flex flex-col gap-y-2 font-medium text-justify" dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};
