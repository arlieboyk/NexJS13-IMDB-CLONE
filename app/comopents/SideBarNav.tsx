"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { MdLabel, MdLocalMovies } from "react-icons/md";
import { useSession, signIn, getSession } from "next-auth/react";

function SideBarNav() {
  const [sideBar, setSideBar] = useState(false);

  const sideBarToggle = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sideBar]);

  if (typeof window !== "undefined") {
  }

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <div
      onClick={sideBarToggle}
      className="flex items-center justify-center px-2  rounded-md"
    >
      <div className="flex items-center  px-2  cursor-pointer rounded-md hover:bg-[#1f1f1f]">
        <p id="sideBarNav" className="inline-block   ">
          <span className="w-6 h-0.5 block bg-white"></span>
          <span className="w-6 h-0.5 block my-1 bg-white"></span>
          <span className="w-6 h-0.5 block bg-white"></span>
        </p>
        <p className="hidden md:inline-block mx-2 py-2 font-bold ">Menu</p>
      </div>
      {/* sidebar */}

      <div
        className={`flex flex-col ${
          sideBar ? "w-48" : "w-0"
        } duration-200  z-30 h-screen  space-y-2  absolute left-0 top-0 bg-gray-900`}
      >
        {sideBar && (
          <>
            <div className="w-full flex relative bg-slate-500 py-2 ">
              <AiOutlineClose className="h-8 w-8 rounded-full relative left-36  p-2 self-end hover:font-bold hover:bg-slate-900" />
            </div>
            <p className="dropdown-text">
              <AiOutlineSearch className="icons text-yellow-400" />{" "}
              <p className="inline"> ALL</p>
            </p>
            <p className="dropdown-text">
              <MdLocalMovies className="icons" />{" "}
              <p className="inline"> Titles</p>
            </p>
            <p className="dropdown-text">
              <FiMonitor className="icons " />{" "}
              <p className="inline"> Tv Episodes</p>
            </p>
            <p className="dropdown-text">
              <BsFillPeopleFill className="icons " />{" "}
              <p className="inline"> Celebs</p>
            </p>
            <p className="dropdown-text border-t border-gray-400">
              <MdLabel className="icons " /> <p className="inline"> Keywords</p>
            </p>

            <button onClick={handleSignIn} className="cursor-pointer ">
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SideBarNav;
