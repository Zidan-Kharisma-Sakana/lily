import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { baseURL, fetcher, patcher, poster } from "../../../utils/api";
import FormData from "form-data";
import formidable from "formidable";
import IncomingForm from "formidable/Formidable";
import nextConnect from "next-connect";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json("Method not allowed");
  } else {
    const data = await new Promise((resolve, reject) => {
      const form = formidable({});
      form.parse(req, (err: any, fields: any, files: formidable.Files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });

    // @ts-ignore
    const cv = data.files.cv as formidable.File;
    const cvData: Buffer = fs.readFileSync(cv.filepath);

    fs.writeFileSync(`./public/${cv.originalFilename}`, cvData);
    // coba simpan ke folder public
    const formData = new FormData();
    formData.append("cv", cv);
    formData.append("linkedin", "https://www.youtube.com/watch?v=cK7_rVZ6ivQ");
    try {
      const result = await fetch(baseURL("api/profile/jobfair/"), {
        body: formData as unknown as BodyInit,
        headers: {
          Authorization: req.headers.authorization ?? "",
        },
        method: "PATCH",
      });

      if (result.ok) {
        const message = await result.json();
        res.status(200).json({ message: "Success!" });
      } else {
        const message = await result.json();
        res.status(500).json({ message: message.detail ?? "unknown error" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
