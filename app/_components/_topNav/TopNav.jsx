"use client";
import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { activeUser } from "@/app/_slices/userSlice";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const TopNav = () => {
  let data = useSelector((state) => state);
  let disp = useDispatch();
  let router = useRouter();
  let handlelogout = () => {
    Cookies.remove("adminData");
    disp(activeUser(null));
    router.push("/");
  };
  return (
    <div className="fixed py-[20px] px-[10px] bg-p-yellow w-full flex justify-end top-0 right-0">
      <div className="flex gap-x-3 items-center">
        <span className="text-p-brown font-semibold">
          Jomaa's Pizza & Donair, {data.userData.userInfo && data.userData.userInfo.branchName}-Branch.
        </span>
        <div className="border-l border-p-red pl-[10px]  cursor-pointer flex items-center font-bold underline text-p-red">
          <div onClick={handlelogout} className="flex items-center gap-x-1">
            <IoMdLogOut className="text-[20px]" /> <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
