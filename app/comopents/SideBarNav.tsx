"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { MdLabel, MdLocalMovies } from "react-icons/md";
import { useSession, signIn, getSession, signOut } from "next-auth/react";

function SideBarNav() {
  const [sideBar, setSideBar] = useState(false);

  /* disable scroll  */
  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sideBar]);

  const sideBarToggle = () => {
    setSideBar(!sideBar);
  };

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
  };
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center px-2  rounded-md">
      <div
        onClick={sideBarToggle}
        className="flex items-center  px-2  cursor-pointer rounded-md hover:bg-[#1f1f1f]"
      >
        <p
          onClick={sideBarToggle}
          className="inline-block cursor-pointer  hover:bg-[#1f1f1f] "
        >
          <span className="w-6 h-0.5 block bg-white"></span>
          <span className="w-6 h-0.5 block my-1 bg-white"></span>
          <span className="w-6 h-0.5 block bg-white"></span>
        </p>
        <p className="hidden md:inline-block mx-2 py-2 font-bold ">Menu</p>
      </div>

      {/* sidebar */}
      <div className={`sideBar ${sideBar ? "  w-48 " : "w-0"}`}>
        {sideBar && (
          <>
            <div
              className="w-full flex relative bg-slate-500 py-2 "
              onClick={sideBarToggle}
            >
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

            <div className="absolute  bottom-6 ">
              {session ? (
                <button
                  onClick={handleSignOut}
                  className="cursor-pointer px-5 py-3 bg-yellow-400 hover:bg-yellow-300 rounded-md  "
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="cursor-pointer px-5 py-3 bg-yellow-400 hover:bg-yellow-300 rounded-md  "
                >
                  Sign in
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SideBarNav;
