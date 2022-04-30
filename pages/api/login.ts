// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("method not allowed");
  }
  try {
    console.log("HAI")
    console.log(req.body)
    const accessToken = await fetch("http://localhost:8000/api/question/", {
      method: "POST",
      body: req.body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(accessToken);
    res.status(200).json(accessToken);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }

  // const accessToken = await axios.post("http://localhost:8000", { ...data });
  // console.log(accessToken);
}
