"use client";
import React, { useEffect, useState } from "react";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlinePlus,
  AiOutlineRight,
} from "react-icons/ai";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { setTimeout } from "timers";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";

interface Movie {
  id: number;
  title: string;
  year: number;
  description: string;
  slug: string;
  movileImage?: string | null;
}

function Carousel({ slides }: { slides: Movie[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeoutId, setTimeoutId] = useState();
  const movie = slides;
  console.log(movie);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log("prev ", currentIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    console.log(isLastSlide);
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log("next ", currentIndex);
  };

  const clickCircles = (currentIndex: number) => {
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      /* using modulo will make the index to 0  */
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 5000);

    // Remember to clear the timeout when the component unmounts or when the currentIndex changes.
  }, [currentIndex, slides.length]);

  const sliderImage = {
    backgroundImage: `url(${slides[currentIndex].movileImage}`,
  };
  const sliderImage2 = {
    backgroundImage: `url(${slides[currentIndex].movileImage}`,
  };
  return (
    /* carousel */
    <div className="h-full relative m-auto w-full md:w-11/12  lg:w-3/4   bg-white  ">
      <div
        onClick={goToPrevious}
        className="absolute top-1/2 z-10 left-[2rem] transform translate-y-[-50%]  text-white  text-4xl  cursor-pointer overflow-hidden"
      >
        <AiFillCaretLeft className="overflow-hidden shadow-md" />
      </div>
      <div
        onClick={goToNext}
        className="absolute top-1/2 right-[2rem] transform translate-y-[-50%] z-10 text-white  text-4xl  cursor-pointer overflow-hidden"
      >
        <AiFillCaretRight className="overflow-hidden shadow-md" />
      </div>
      <div
        style={sliderImage}
        className={`w-full h-full relative  z-0 bg-cover bg-no-repeat  transition-opacity ease-linear`}
      >
      
      </div>
      {/* small iamge */}
      <div className="mx-3">
        <div
          /* image */
          style={sliderImage2}
          className="absolute hidden md:block  md:w-[7rem] md:h-[10rem] bottom-0 z-10 bg-cover shadow-md shadow-black"
        >
          <div className="absolute inset-1 ">
            <AiOutlinePlus className="text-yellow-400 hover:scale-110 p-1  rounded-full hover:bg-slate-400/50 h-8 w-8" />
          </div>
        </div>
        {/* title */}
        <div className="absolute space-x-4  text-white  bottom-0 md:bottom-8 md:left-[9rem]  ">
          <BsPlayCircle className=" h-12 w-12 bottom-12 inline hover:text-yellow-400" />
          <div className="text-left inline">
            <h1 className="inline text-2xl relative top-2 font-bold">
              {movie[currentIndex].title}
            </h1>
            <p className="text relative text-white/80 font-normal left-[4rem] ">
              {movie[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="relative w-auto  top-5">
          <p className="flex items-center  hover:text-yellow-400 text-white text-xl font-bold">
            Browse trailer
            <AiOutlineRight className="h-4 w-4 mx-2 " />
          </p>
        </div>
      </div>

      {/* circles */}
      <div
        id="circlesCon"
        className="flex absolute left-0 right-0 mx-auto -bottom-4 gap-6 items-center justify-center"
      >
        {movie.map((circles, id) => (
          <p
            onClick={() => clickCircles(id)}
            key={circles.id}
            className={`h-2 w-2 hover:scale-150 cursor-pointer transition-all ease-in  delay-200 duration-200 rounded-full ${
              id + 1 === currentIndex + 1
                ? "bg-white shadow-md scale-150"
                : "bg-slate-800"
            }`}
          ></p>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
