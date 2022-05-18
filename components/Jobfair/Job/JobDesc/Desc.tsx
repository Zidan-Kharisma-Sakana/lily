import { FC } from "react";

export const JobAbout: FC<{ data: string }> = ({ data }) => {
  return (
    <div className="w-full mt-7 lg:mt-8">
      <h5 className="text-lg font-bold mb-2">About the role</h5>
      <p className="font-medium">{data}</p>
    </div>
  );
};

export const JobActivity: FC<{ data: string }> = ({ data }) => {
  return (
    <div className="w-full mt-7 lg:mt-8">
      <h5 className="text-lg font-bold mb-2">What you will do</h5>
      <p className="font-medium">{data}</p>
    </div>
  );
};

export const JobLooking: FC<{ data: string[] }> = ({ data }) => {
  return (
    <div className="w-full mt-7 lg:mt-8">
      <h5 className="text-lg font-bold mb-2">What we&apos;re looking for</h5>
      <ul className="list-disc pl-4">
        {data.map((s, idx) => (
          <li key={"look-" + idx} className="">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
};
