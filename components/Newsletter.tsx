import React from "react";
import { AiOutlineSend } from "react-icons/ai";

export const Newsletter = () => {
  return (
    <div className=" h-[60vh] bg-slate-50 flex items-center justify-center flex-col">
      <h2 className=" text-6xl mb-7 font-semibold">Newsletter</h2>
      <p className=" text-xl font-light mb-5">
        Get updates about your favourite products!
      </p>
      <div className=" w-1/2 bg-white h-10 flex justify-between border border-gray-400">
        <input
          type="text"
          className=" border-none flex-[8] pl-5"
          placeholder="Your email"
        />
        <button className=" flex-1 flex items-center justify-center bg-teal-600 text-white text-2xl">
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};
