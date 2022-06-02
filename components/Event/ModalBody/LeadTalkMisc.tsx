/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export interface LTTLCardProps {
  day: number;
  tgl: string;
  isi: {
    title: string;
    sub?: string;
  }[];
}
export interface LTSpeakerProps {
  name: string;
  src: string;
  job: string;
}
export const LeadTalkTLCard: FC<LTTLCardProps> = ({ day, tgl, isi }) => {
  return (
    <div className="mb-6 shadow-medium bg-[#FFFAF2] rounded-xl py-10 px-6 md:py-12 md:px-8 xl:py-14 xl:px-10 w-full md:w-4/5 lg:w-[330px] xl:w-[350px]">
      <h4 className="text-[32px] text-info-darkest font-bold">Day {day}</h4>
      <p className="text-xs font-semibold text-info-darkest mb-5">{tgl}</p>

      <div>
        {isi.map((data, idx) => {
          return (
            <div key={"TL-" + idx} className="mb-1.5">
              <div className="pl-4 relative text-primary-light text-xs mb-1 flex">
                <div className="bg-primary-light text-semibold w-3 h-3 rounded-full absolute left-0 top-1/2 -translate-x-[45%] -translate-y-1/2" />
                <p>{data.title}</p>
              </div>
              <div className="pl-4 text-lg font-bold border-2 border-transparent border-l-primary-darkest">
                {data.sub ?? ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const LeadTalkSpeaker: FC<LTSpeakerProps> = ({ name, src, job }) => {
  return (
    <div className="text-center text-[10px] text-[#282828] w-[120px] flex flex-col items-center">
      <img
        src={src}
        alt=""
        className="w-[90px] h-[90px] mb-2 bg-[#FFC845] rounded-full"
      />
      <p className="text-primary-darkest font-bold">{name}</p>
      <p>{job}</p>
    </div>
  );
};

export const EventContent: FC<{
  title: string;
  tanggal: string;
  text: string;
}> = ({ title, tanggal, text }) => {
  return (
    <div className="mb-6">
      <h5 className="font-bold text-lg">{title}</h5>
      <div className="my-2 flex text-primary-base font-bold text-xs">
        <img src="/icons/calendar_2.svg" alt="" className="mr-2" />
        <p>{tanggal}</p>
      </div>
      <p className="font-medium">{text}</p>
    </div>
  );
};
