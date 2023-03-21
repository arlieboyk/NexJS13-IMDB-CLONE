import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  res: NextApiResponse,
  req: NextApiRequest
) {
  return res.status(200).json({ msg: "hello" });
}
