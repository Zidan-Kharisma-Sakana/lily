import { FC } from "react";
import { useAuth } from "../../../context/auth";
import {
  LeadTalkSpeaker,
  LeadTalkTLCard,
  LTSpeakerProps,
  LTTLCardProps,
} from "./LeadTalkMisc";

export const LeadTalkContent: FC = () => {
  const { user } = useAuth();

  const onRegistration = () => {};
  return (
    <div className="font-medium text-[#282828]">
      <h5 className="font-bold text-2xl">LeadTalk</h5>
      <div id="aboutLeadTalk" className="my-6">
        <h6 className="font-bold text-lg mb-1">About Leadtalk</h6>
        <p>
          For the peak of our event, we are bringing an exclusive talkshow that
          is filled with impactful speakers from national and international
          levels for two days. The talkshows are designed specifically for
          youths who are interested in developing their career in startups,
          consulting, and finance.
        </p>
      </div>
      <div id="timelineLeadtalk">
        <h6 className="font-bold text-lg mb-1">LeadTalk Timeline</h6>
        <div
          id="timelineCard"
          className="flex flex-col items-center lg:flex-row lg:items-stretch justify-between"
        >
          {dataTL.map((data, idx) => (
            <LeadTalkTLCard key={"tlcard-" + idx} {...data} />
          ))}
        </div>
        <p>*Events name and topic details are subject to change.</p>
        <p>Changes and updates will be informed by our committees.</p>
      </div>
      <div id="speakerLeadTalk" className="my-6">
        <h6 className="font-bold text-lg mb-1">LeadTalk Speakers</h6>
        <div className="w-full md:flex my-2">
          <div className="w-full md:w-1/2 flex justify-around">
            {dataSpeakers1.map((obj, idx) => (
              <LeadTalkSpeaker key={"Speaker-" + idx} {...obj} />
            ))}
          </div>
          <div className="w-full md:w-1/2 flex justify-around mt-4 md:mt-0">
            {dataSpeakers2.map((obj, idx) => (
              <LeadTalkSpeaker key={"Speaker-" + idx} {...obj} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div>
          <div className="bg-primary-base px-4 py-2 rounded-[48px] text-white mb-1 cursor-pointer">
            Register Here
          </div>
          <p className="text-center text-xs">free of charge*</p>
        </div>
      </div>
    </div>
  );
};

const dataTL: LTTLCardProps[] = [
  {
    day: 1,
    tgl: "2nd May 2022",
    isi: [
      {
        title: "Session 1",
        sub: "How Youth Can Be the Future Game Changer",
      },
      {
        title: "Session 2",
        sub: "Build Your Own Path for Career Journey",
      },
      {
        title: "Break",
      },
      {
        title: "Session 3",
        sub: "Engagement Session",
      },
    ],
  },
  {
    day: 2,
    tgl: "3rd May 2022",
    isi: [
      {
        title: "Session 1",
        sub: "Taking Risks and Failing is the Path to Success",
      },
      {
        title: "Session 2",
        sub: "The Era of a Thousand Opportunities",
      },
      {
        title: "Break",
      },
      {
        title: "Session 3",
        sub: "Embracing Cross Cultural Understanding",
      },
      {
        title: "Session 4",
        sub: "Ultimate Personal Goals: Job Security",
      },
    ],
  },
];
const dataSpeakers1: LTSpeakerProps[] = [
  {
    name: "Faisal Basri",
    src: "/images/foto/1.png",
    job: "Economist",
  },
  {
    name: "Andrew Ebeneizer",
    src: "/images/foto/2.png",
    job: "Management Consultant at PwC Indonesia",
  },
  {
    name: "Dayu Dara Permata",
    src: "/images/foto/3.png",
    job: "Founder & CEO of Pinhome",
  },
];
const dataSpeakers2: LTSpeakerProps[] = [
  {
    name: "Maya Arvini",
    src: "/images/foto/4.png",
    job: "President of Qlue Smart City",
  },
  {
    name: "Asrini Suhita",
    src: "/images/foto/5.png",
    job: "Sales Senior Director at Procter & Gamble Indonesia ",
  },
  {
    name: "Dimas Ramadhan",
    src: "/images/foto/6.png",
    job: "Content Creator & Entrepreneur",
  },
];
