import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function GET(request:Request){
  const movie = await prisma.movie.findMany()

  return NextResponse.json(movie)
}

