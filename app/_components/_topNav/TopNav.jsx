import React from "react";
import { IoMdLogOut } from "react-icons/io";

import Image from "next/image";

const TopNav = () => {
  return (
    <div className="fixed py-[20px] px-[10px] bg-p-yellow w-full flex justify-end top-0 right-0">
      <div className="flex gap-x-3 items-center">
        <span className="text-p-brown font-semibold">
          Jomaa,s Pizza & Donair,Edmonton.
        </span>
        <div className="border-l border-p-red pl-[10px]  cursor-pointer flex items-center font-bold underline text-p-red">
          <IoMdLogOut className="text-[20px]" /> <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
