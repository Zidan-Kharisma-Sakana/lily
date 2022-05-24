import type { NextApiRequest, NextApiResponse } from "next";

import { fetcher, patcher, poster } from "../../../utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("Method not allowed");
  } else {
    console.log(req.body);
    console.log("---")
    try {
      const data = await patcher("auth/users/me/", req);
      if (data.ok) {
        res.status(200).json({ message: "Success!" });
      } else {
        const message = await data.json()
        res.status(500).json({ message: message.detail ?? "unknown error" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
}
