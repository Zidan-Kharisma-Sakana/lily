import type { NextApiRequest, NextApiResponse } from "next";
import { poster, posterFormData } from "../../utils/api";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("Method not allowed");
  } else {
    const response = await poster("auth/users/activation/", req);
    if (response.ok) {
      res.status(200).json({ message: "sukses" });
    } else {
      res.status(404).json({ message: "unknown error" });
    }
  }
}
