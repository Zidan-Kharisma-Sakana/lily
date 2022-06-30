import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FC } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/auth";
import { baseURLFE } from "../../../utils/api";
import { EventContent } from "./LeadTalkMisc";

export const LeadTalkContent: FC<{ openSuccess: () => void }> = ({
  openSuccess,
}) => {
  const { user } = useAuth();
  const router = useRouter();
  const onRegistration = async () => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/sign-in");
    } else {
      toast.loading("Registering...");
      const res = await fetch(baseURLFE("api/event/1/apply/"), {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      toast.dismiss();
      if (res.ok) {
        openSuccess();
      } else {
        console.log(await res.json());
        toast.error("Oops, please try again");
      }
    }
  };
  return (
    <div className="font-medium text-[#282828]">
      <h5 className="font-bold text-2xl mb-6">Main Event</h5>
      {data.map((e, idx) => {
        return <EventContent key={`event-${idx}`} {...e} />;
      })}
      <div className="w-full flex justify-center">
        <div>
          <div
            onClick={onRegistration}
            className="bg-primary-base px-4 py-2 rounded-[48px] text-white mb-1 cursor-pointer"
          >
            Register Here
          </div>
          <p className="text-center text-xs">free of charge*</p>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Job Fair",
    tanggal: "25 June - 26 July 2022",
    text: "In order to optimally facilitate the needs of our partner companies, we are going to provide a virtual job fair as an interactive tool for talents across Indonesia. This virtual job fair will increase our company partners’ employer branding by making a personalized booth and making them able to collect talents’ databases.",
  },
  {
    title: "Company Visit",
    tanggal: "11 - 12 July 2022",
    text: "[HYBRID] Our company visit session will give you a sneak peak of what its like to work on our partnered companies. The offline company visit will be held on 12 July 2022.",
  },
  {
    title: "LeadTalk",
    tanggal: "14-15 July 2022",
    text: "[HYBRID] For the peak of our event, we are bringing an exclusive hybrid talkshow for career seekers in startups, consulting and finance that is filled with national and international impactful speakers for two days. The offline event will be held on 15th of July 2022.",
  },
  {
    title: "Workshop",
    tanggal: "2 July 2022",
    text: "An interactive workshop session where youths can discuss, share thoughts, and do practical work on a specific subject with a group of people from different backgrounds.",
  },
  {
    title: "Global Ambassador",
    tanggal: "20 May 2022",
    text: "The Global Ambassador Programme (GAP) is a student-led engagement program for incoming first years and second year university students who are dedicated to develop their leadership skills in a practical learning environment.",
  },
  {
    title: "Day In the Life",
    tanggal: "4 June 2022",
    text: "Pre-Event consists of Global Ambassadors and Day in the Life at Creative Space, which aims to introduce youths around the globe about the working culture in several companies in Indonesia.",
  },
];

// const dataTL: LTTLCardProps[] = [
//   {
//     day: 1,
//     tgl: "2nd May 2022",
//     isi: [
//       {
//         title: "Session 1",
//         sub: "How Youth Can Be the Future Game Changer",
//       },
//       {
//         title: "Session 2",
//         sub: "Build Your Own Path for Career Journey",
//       },
//       {
//         title: "Break",
//       },
//       {
//         title: "Session 3",
//         sub: "Engagement Session",
//       },
//     ],
//   },
//   {
//     day: 2,
//     tgl: "3rd May 2022",
//     isi: [
//       {
//         title: "Session 1",
//         sub: "Taking Risks and Failing is the Path to Success",
//       },
//       {
//         title: "Session 2",
//         sub: "The Era of a Thousand Opportunities",
//       },
//       {
//         title: "Break",
//       },
//       {
//         title: "Session 3",
//         sub: "Embracing Cross Cultural Understanding",
//       },
//       {
//         title: "Session 4",
//         sub: "Ultimate Personal Goals: Job Security",
//       },
//     ],
//   },
// ];
// const dataSpeakers1: LTSpeakerProps[] = [
//   {
//     name: "Faisal Basri",
//     src: "/images/foto/1.png",
//     job: "Economist",
//   },
//   {
//     name: "Andrew Ebeneizer",
//     src: "/images/foto/2.png",
//     job: "Management Consultant at PwC Indonesia",
//   },
//   {
//     name: "Dayu Dara Permata",
//     src: "/images/foto/3.png",
//     job: "Founder & CEO of Pinhome",
//   },
// ];
// const dataSpeakers2: LTSpeakerProps[] = [
//   {
//     name: "Maya Arvini",
//     src: "/images/foto/4.png",
//     job: "President of Qlue Smart City",
//   },
//   {
//     name: "Asrini Suhita",
//     src: "/images/foto/5.png",
//     job: "Sales Senior Director at Procter & Gamble Indonesia ",
//   },
//   {
//     name: "Dimas Ramadhan",
//     src: "/images/foto/6.png",
//     job: "Content Creator & Entrepreneur",
//   },
// ];
