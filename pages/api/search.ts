import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//     message: string
//   }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const searchParams = req.body;

    const searchedMovie = await prisma.movie.findUnique({
      where: {
        id: Number(),
      },
    });
    res.status(200).json(searchedMovie);
  }
}
