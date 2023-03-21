import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextApiResponse, NextApiRequest } from "next";

interface Params {
  params: string;
}

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse,
  searchParams: number,
  params: Params
) {
  console.log(params);
  try {
    if (req.method === "GET") {
      const movie = await prisma.movie.findUnique({
        where: {
          id: Number(params),
        },
      });

      if (movie !== null) {
        return NextResponse.json(movie);
      } else {
        return NextResponse.json({ msg: "error" });
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export async function POST() {
  return NextResponse.json({ msg: "hello post" });
}
