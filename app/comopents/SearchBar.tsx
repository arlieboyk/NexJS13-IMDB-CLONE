import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocalMovies, MdLabel } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import React, { useState } from "react";
import Input from "./Input";

function SearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropDownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative w-10/12 lg:w-1/2 z-20 hidden sm:flex items-center  focus:border-yellow-300  border-2  font-semibold bg-white text-black rounded-md">
        <div
          onClick={dropDownToggle}
          className=" px-1 flex border-r items-center  cursor-pointer"
        >
          <div className="drop-text ">All</div>
          <div className="drop-text flex-shrink-0">
            <RiArrowDropDownFill size={20} />
          </div>
        </div>
        {/* dropdown */}
        <div
<<<<<<< HEAD
          className={`absolute  ${isDropdownOpen ? "transform opacity-100" : "opacity-0"} top-[3rem]  space-y-3 flexf z-[99] lex-col items-center justify-center  transition-all ease-in-out  bg-[#000000de] text-white`}
=======
          className={`absolute  ${
            isDropdownOpen ? "transform opacity-100" : "opacity-0"
          } top-[3rem]  space-y-3 flexf lex-col items-center justify-center  transition-all ease-in-out  bg-[#000000de] text-white`}
>>>>>>> 55f39a88e0b1512a776b4eb0ff52c165f91cf0c9
        >
          {isDropdownOpen && (
            <>
              <p className="dropdown-text">
                <AiOutlineSearch className="icons text-yellow-400" />
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
                <MdLabel className="icons " />{" "}
                <p className="inline"> Keywords</p>
              </p>
            </>
          )}
        </div>

        <Input />

        <AiOutlineSearch className="m-2 text-2xl text-gray-500 hover:text-black" />
      </div>
    </>
  );
}

export default SearchBar;
