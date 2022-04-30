// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("api/question");
  const body = new FormData()
  body.append("email", "zidan@gmail.com")
  body.append("name", "zidan")
  body.append("questions", "test 123")
  
  const response = await fetch("http://localhost:8000/api/question/", {
    body,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST"
  })
  console.log(response.body);
  res.status(200).json(response);
}
