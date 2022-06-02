import { NextApiRequest, NextApiResponse } from "next/types";

const x = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  // This will allow OPTIONS request
  if (method === "OPTIONS") {
    return res.status(200).send("ok");
  }
};
export default x;
