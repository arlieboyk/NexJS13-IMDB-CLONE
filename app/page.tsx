import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./comopents/Carousel";
import Featured from "./comopents/Featured";

type Movie = {
  id: number;
  title: string;
  year: number;
  description: string;
  slug: string;
  movileImage?: string | null;
};

const slides = [
  {
    url: "https://mcdn.wallpapersafari.com/medium/95/29/cAeyxs.jpg",
    title: "Breaking-bad",
  },
  {
    url: "https://mcdn.wallpapersafari.com/medium/5/81/9nhGyP.jpg",
    title: "Green-bad",
  },
  {
    url: "https://mcdn.wallpapersafari.com/medium/95/29/cAeyxs.jpg",
    title: "Breaking-bad",
  },
];

export default async function page() {
  const movies: Movie[] = await prisma.movie.findMany();

  return (
    <>
      <div className="w-full md:10/12 lg:w-3/4 mx-auto">
        <div className="md:h-[25rem] h-[14rem]  m-auto">
          <Carousel slides={movies} />
        </div>

        <section>
          <Featured movie={movies} />
        </section>

        {movies.map((movie) => (
          <Link href={`/${movie.id}`}>
            <section
              key={movie.id}
              className=" flex flex-col w-full md:w-11/12  lg:w-3/4 my-2 p-5  mx-auto justify-center items-center hover:border bg-[#292828] text-center font-bold text-slate-50  rounded  hover:shadow"
            >
              {movie.movileImage && (
                <Image
                  src={movie.movileImage}
                  alt=""
                  width={500}
                  height={500}
                  className="w-auto h-auto"
                />
              )}
              <h1 className="text-xl"> {movie.title}</h1>
              <p className="font-thin">Year: {movie.year}</p>
              <p className=" font-light">{movie.description}</p>
            </section>
          </Link>
        ))}
      </div>
      <Result />
    </>
  );
}

const Result = () => {
  return (
    <section>
      <h1 className="text-white text-4xl font-bold">Results</h1>
    </section>
  );
};
