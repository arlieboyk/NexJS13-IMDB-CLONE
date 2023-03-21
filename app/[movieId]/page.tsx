import React from "react";
import prisma from "@/lib/prisma";
interface Props {
  params: { movieId: number };
}

type Movie = {
  id: number;
  title: string;
  year: number;
  description: string;
  slug: string;
  movileImage?: string | null;
};

async function page({ params }: Props, searchParams: any) {
  console.log("id:", params.movieId);

  return (
    <>
      <h1 className="text-white font-bold">params: {params.movieId}</h1>
    </>
  );
}

export default page;
