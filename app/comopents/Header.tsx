"use client";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import SearchBar from "./SearchBar";
import SelectLanguage from "./SelectLanguage";
import SideBarNav from "./SideBarNav";

const handleGoogleSignIn = async () => {
  signIn("google", { callbackUrl: "http://localhost:3000" });
};

//  const handleGoogleSignIn = async () => {
//   signIn("google", {callbackUrl:'http://localhost:3000'});
// };

async function handelSignout() {
  signOut({ callbackUrl: "http://localhost:3000/images" });
}

function Header() {
  const [search, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch(!search);
  };

  const { data: session } = useSession();

  console.log("session ", session);
  return (
    <header className=" bg-white ">
      {/* phone search */}
      {search ? (
        <div className="flex items-center transition-all duration-150 delay-150 min-h-16  bg-[#1f1f1f]  md:hidden">
          <input
            placeholder="Search IMDb"
            className=" focus:outline-none w-full font-normal h-12 bg-[#1f1f1f]  text-white font-semibol px-3 py-2"
          />
          <MdClose
            onClick={toggleSearch}
            className=" text-white h-10 w-10 mx-1 p-2  hover:bg-[#383838] rounded-full hover:scale-105 "
          />
        </div>
      ) : (
        <nav className="bg-black md:px-2 py-2 lg:px-12 text-white d flex justify-between lg:justify-center space-x-3 items-center">
          {/* logo and humburger */}
          <div className="flex md:flex-row space-x-1 flex-row-reverse items-center">
            <span className="px-3 py-1 bg-yellow-300 text-black font-bold rounded-md text-xl ">
              IMDb
            </span>
            <SideBarNav />
          </div>
          {/* searchbar */}
          <SearchBar />
          {/* imdbpro logo */}
          <div className="hidden lg:block font-bold  w-24">
            <p className="inline-block">
              IMDb
              <span className="inline-block text-blue-400"> Pro</span>
            </p>
          </div>

          {/* sign in and lang option */}
          <div className="font-bold flex space-x-2 items-center  px-2 md:border-l border-gray-600">
            <button
              onClick={toggleSearch}
              className="xs:hidden hover:hover:bg-[#1f1f1f] flex items-center justify-center h-10 w-10 top-0 bottom-0 m-auto  rounded-full  "
            >
              <AiOutlineSearch className="  text-white  h-5 w-5 hover:scale-105 " />
            </button>
            {session ? (
              <button
                onClick={handelSignout}
                className="w-20 font-semibold hover:bg-[#1f1f1f] px-2 py-2 rounded-md"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="w-20 font-semibold hover:bg-[#1f1f1f] px-2 py-2 rounded-md"
              >
                Sign in
              </button>
            )}
            {session ? (
              <p className="text-gray-400">
                {session.user?.name?.split(" ")[0]}
              </p>
            ) : (
              <p>Guest</p>
            )}
            <SelectLanguage />
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
