"use client";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

type movie = {
  id: number;
  title: string;
  year: number;
  description: string;
  slug: string;
  movileImage?: string | null;
};

type MovieProps = {
  movie: movie[];
};

function Featured({ movie }: MovieProps) {
  return (
    <section className="w-full md:w-11/12  lg:w-3/4 my-12 mx-auto px-3 py-2  bg-[#292828] ">
      <h2 className="font-bold w-1/2  text-3xl text-yellow-400">Featured</h2>
      <div className="flex overflow-x-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={2}
          spaceBetween={0}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={true}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {movie.map((m) => (
            <SwiperSlide key={m.id} className=" max-h-36 relative">
              <h2 className="text-white absolute  bottom-0 ">{m.title}</h2>
              <Image
                src={m.movileImage ? `${m.movileImage}` : "default image"}
                className=" w-auto h-auto"
                width={200}
                height={200}
                alt={m.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Featured;
