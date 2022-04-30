import type { NextApiRequest, NextApiResponse } from "next";
import { fetcher, poster } from "../../utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json("Method not allowed");
  } else {
    const response = await fetcher(
      "auth/users/me/",
      req.headers.authorization ?? ""
    );
    const data = await response.json();
    try {
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: data.detail ?? "unknown error" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
