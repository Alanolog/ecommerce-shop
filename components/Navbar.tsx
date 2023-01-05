import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className=" h-16">
      <div className=" px-3 py-5 flex justify-between">
        <div className=" flex-1 flex items-center border border-gray-400">
          <span className=" text-sm cursor-pointer">EN</span>
          <div className=" flex items-center ml-6 p-1 gap-1">
            <input className=" border-none" />
            <BiSearch style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className=" flex-1 text-center ">
          <h1 className=" font-semibold">RANDOM</h1>
        </div>
        <div className=" flex-1 flex items-center ">
          <div className=" flex-1 text-sm cursor-pointer ml-3">REGISTER</div>
          <div className=" flex-1 text-sm cursor-pointer ml-3">SIGN IN</div>
          <div className=" flex-1 text-sm cursor-pointer ml-3">
            {" "}
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};
