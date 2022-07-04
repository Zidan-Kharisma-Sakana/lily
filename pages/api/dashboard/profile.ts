import type { NextApiRequest, NextApiResponse } from "next";

import { fetcher, patcher, poster } from "../../../utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("Method not allowed");
  } else {

    try {
      const data = await patcher("auth/users/me/", req);
      const message = await data.json();
      if (data.ok) {
        res.status(200).json({ message: "Success!" });
      } else {
        res.status(500).json({ message: message.detail ?? "unknown error" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
