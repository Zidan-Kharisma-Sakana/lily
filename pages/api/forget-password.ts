import type { NextApiRequest, NextApiResponse } from "next";
import { poster } from "../../utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("Method not allowed");
  } else {
    const response = await poster("auth/users/reset_password/", req);
    try {
      if (response.ok) {
        res.status(200).json({ message: "Success" });
      } else {
        res.status(500).json({ message: "unknown error" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
