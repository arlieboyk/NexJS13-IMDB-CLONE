import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextApiRequest,res:NextApiResponse) {
  try {
    const data = await prisma.movie.findMany()
      return res.status(200).json(data);
  } catch (error) {
      return res.status(500).json(error)
  }

}