import type { NextApiRequest, NextApiResponse } from "next";

import { fetcher, poster } from "../../../utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json("Method not allowed");
  } else {
    const promise1 = fetcher(
      "api/profile/jobfair/",
      req.headers.authorization ?? ""
    );
    const promise2 = fetcher(
      "api/profile/event/",
      req.headers.authorization ?? ""
    );
    const promise3 = fetcher(
      "api/profile/applications/",
      req.headers.authorization ?? ""
    );

    try {
      const values = await Promise.all([promise1, promise2, promise3]);
      const jsons = await Promise.all(values.map((res) => res.json()));
      const usr = jsons[0];

      const userData = {
        UserInfo: [
          {
            title: "Curriculum Vitae (CV)",
            filename: usr.cv ? "CV.pdf" : "-",
            link: usr.cv ?? "",
          },
          {
            title: "linkedin",
            filename: usr.linkedin,
            link: usr.linkedin,
          },
          {
            title: "Website/Portfolio",
            filename: usr.portfolio_url,
            link: usr.portfolio_url,
          },
        ],
        AppliedJobs: jsons[2].map((data: any) => {
          const job = data.job_opening;
          const isRemote = data.remote_available;
          const r = {
            applyTime: new Date(),
            id: job.id,
            company: {
              name: job?.owner?.name ?? "",
              img: job?.owner?.logo,
              id: job?.owner?.id,
            },
            location: job?.location ?? "",
            title: job?.title ?? "",
            type: job?.employment_type,
          };
          return r;
        }),
        RegisteredEvents: jsons[1].map((data: any) => {
          return {
            event: data?.event ?? "",
            date: new Date(2022, 12, 11),
          };
        }),
      };
      res.status(200).json(userData);
    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error });
    }
  }
}
