import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="relative z-30 flex items-center justify-between text-white mx-8 py-3 border-b-[2px] border-white/50">
      <div className="flex items-center">
        {/* Left */}
        <p className=" font-bold text-[28px] pr-24">KULTURA</p>
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li className="relative flex items-center justify-center group">
            <p>Explore</p>
            <div className="absolute h-[2px] w-[4.1rem] bg-white -bottom-[23px]  scale-0 group-hover:scale-100 duration-200 ease-out rounded-full"></div>
          </li>
          <li className="relative flex items-center justify-center group">
            <p>Discover</p>
            <div className="absolute h-[2px] w-[5.1rem] bg-white -bottom-[23px]  scale-0 group-hover:scale-100 duration-200 ease-out rounded-full"></div>
          </li>
          <li className="relative flex items-center justify-center group">
            <p>Tour Package</p>
            <div className="absolute h-[2px] w-[6.8rem] bg-white -bottom-[23px]  scale-0 group-hover:scale-100 duration-200 ease-out rounded-full"></div>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center text-[25px] gap-4">
        <FiSearch />
        <AiOutlineUser />
      </div>
    </div>
  );
};

export default Navbar;
