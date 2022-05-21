/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export interface CompanyProfileProps {
  name: string;
  logo: string;
  location: string;
  website: string;
  instagram: string;
  facebook: string;
  email: string;
  about: string;
}

export const CompanyProfile: FC<CompanyProfileProps> = (props) => {
  return (
    <div className="glassCardNoPad w-full p-6 text-xs relative z-5">
      {/* image and profil */}
      <div className="w-full fle xmd:flex-col gap-4">
        <img
          src={props.logo}
          alt={props.name + " logo"}
          className="w-[64px] h-[64px] sm:w-[100px] sm:h-[100px] md:w-[220px] md:h-[220px] bg-[#C4C4C4] rounded-lg"
        />
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-baseline">
            <img src="/icons/map-pin2.svg" alt="" className="w-4 h-4 translate-y-0.5" />
            <p>{props.location}</p>
          </div>
          <div className="flex gap-x-2 items-baseline">
            <img src="/icons/globe2.svg" alt="" className="w-4 h-4 translate-y-0.5" />
            <p>{props.website}</p>
          </div>
        </div>
      </div>
      {/* contact :*/}
      <div className="flex gap-x-6 my-5">
        <a
          className="block w-6 h-6"
          target="_blank"
          href={props.instagram}
          rel="noreferrer"
        >
          <img src="/icons/instagram2.svg" alt="" />
        </a>
        <a
          className="block w-6 h-6"
          target="_blank"
          href={props.facebook}
          rel="noreferrer"
        >
          <img src="/icons/facebook2.svg" alt="" />
        </a>
        <a
          className="block w-6 h-6"
          target="_blank"
          href={props.email}
          rel="noreferrer"
        >
          <img src="/icons/mail2.svg" alt="" />
        </a>
      </div>
      {/* about */}
      <div>
        <h4 className="font-bold text-base mb-3">About</h4>
        <p>{props.about}</p>
      </div>
    </div>
  );
};
