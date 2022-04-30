import type { NextApiRequest, NextApiResponse } from "next";
import { poster } from "../../utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("Method not allowed");
  } else {
    const response = await poster("auth/users/", req);
    const data = await response.json();
    try {
      if (response.ok) {
        res.status(200).json(data);
      } else {
        const message =
          data.detail ??
          data?.full_name?.[0] ??
          data?.email?.[0] ??
          data?.phone?.[0] ??
          data?.password?.[0];
        res.status(404).json({ message: message ?? "unknown error" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
