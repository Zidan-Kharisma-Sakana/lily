import type { NextApiRequest, NextApiResponse } from "next";
import { poster, posterFormData } from "../../utils/api";
import FormData from "form-data";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("Method not allowed");
  } else {
    const response = await poster("auth/users/reset_password_confirm/", req);
    if (response.ok) {
      res.status(200).json({ message: "sukses" });
    } else {
      const data = await response.json();
      const message =
        data.detail ??
        data?.uid?.[0] ??
        data?.token?.[0] ??
        data?.new_password?.[0] ??
        data?.re_new_password?.[0];
      res.status(404).json({ message: message ?? "Unknown Error" });
    }
  }
}