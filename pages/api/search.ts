import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const searchQuery = req.query.query;
    // const searchParams = req.body;
    const searchedMovie = await prisma.movie.findUnique({
      where: {
        id: Number(searchQuery),
      },
    });
    res.status(200).json({ searchedMovie });
  }
}
