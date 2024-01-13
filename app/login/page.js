"use client";
import React, { useState } from "react";
import logo from "../_svg/logo.svg";
import Image from "next/image";
import CommonButton from "../_components/_common-button/CommonButton";
const LoginPage = () => {
  const [secretKey, setSecretKey] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const branches = [
    "Edmonton",
    "Fort McMurray",
    "Thickwood",
    "Downtown",
    "Beacon Hill",
    "Timberlea",
  ]; // Add your branch names here

  const handleLogin = () => {
    // Add your login logic here
    console.log("Secret Key:", secretKey);
    console.log("Selected Branch:", selectedBranch);
    // Add logic to navigate to the dashboard if credentials match
  };

  return (
    <div className=" relative  h-screen bg-p-yellow">
      <div
        className="h-[50%] relative w-full"
        style={{
          backgroundImage: `url('https://i.postimg.cc/5N4sbz8T/storyslide2-2.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full bg-[#000000d1]"></div>
      </div>
      <div className="px-[10px] flex justify-center absolute top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%]">
        <div className="  w-full md:w-[400px] flex-col gap-y-5 shadow-lg bg-white rounded-lg p-5 flex justify-center items-center">
          <Image
            src={logo}
            className="w-[150px] h-auto hidden md:block"
            alt="logo"
          />
          <h1 className="text-2xl text-center text-p-brown font-bold">
            Login to your branch
          </h1>
          <input
            type="text"
            placeholder="Enter Branch Secret Key"
            className="border p-2 outline-p-red rounded w-full"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
          <select
            className="border p-2 rounded w-full"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="" disabled>
              Select Branch
            </option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
          <CommonButton title={"Login"} onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
