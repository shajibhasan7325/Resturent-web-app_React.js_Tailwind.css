import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillCloseCircle,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side  */}
      <div className="flex items-center">
        <div className="cursor-pointer " onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <div className="p-2 text-2xl md:text-3xl lg:text-4xl">
          <h1>
            Best <span className="font-bold ">Eats</span>
          </h1>
        </div>
        <div className=" hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="p-2 text-white bg-black rounded-full ">Delivery</p>
          <p className="p-2 ">PickUp</p>
        </div>
      </div>
      {/* Right side */}
      <div className="bg-gray-200 rounded-full w-[200px] flex items-center sm:w-[400px] lg:w-[500px] p-2">
        <AiOutlineSearch size={30} />
        <input
          className="w-full p-2 bg-transparent focus:outline-none "
          type="text"
          placeholder="Search Foods"
        />
      </div>

      {/* button */}
      <button className="hidden text-white bg-black rounded-full md:flex">
        <BsFillCartFill size={25} className="mr-2" />
        Card
      </button>
      {/* mobile menu */}
      {/* overly */}

      {nav ? (
        <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80"></div>
      ) : (
        ""
      )}

      {/* slide menu */}
      <div
        className={
          nav
            ? " fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : " fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiFillCloseCircle
          onClick={() => setNav(!nav)}
          className="absolute cursor-pointer top-4 right-4"
          size={30}
        />
        <h2 className="p-4 text-2xl ">
          Best <span className="font-bold ">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 ">
            <li className="flex py-4 text-xl ">
              <TbTruckDelivery size={25} className="mr-4 " /> order
            </li>
            <li className="flex py-4 text-xl ">
              <MdFavorite size={25} className="mr-4 " /> Favorite
            </li>
            <li className="flex py-4 text-xl ">
              <FaWallet size={25} className="mr-4 " /> wallet
            </li>
            <li className="flex py-4 text-xl ">
              <MdHelp size={25} className="mr-4 " /> Help
            </li>
            <li className="flex py-4 text-xl ">
              <AiFillTag size={25} className="mr-4 " />
              Promotion
            </li>
            <li className="flex py-4 text-xl ">
              <BsFillSaveFill size={25} className="mr-4 " />
              Best One
            </li>
            <li className="flex py-4 text-xl ">
              <FaUserFriends size={25} className="mr-4 " />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
