"use client"
import React from "react";
import Image from "next/image";
import {  useSelector } from "react-redux";
const page = () => {
  let data = useSelector((state) => state);
  return (
    <div className="pt-[80px] p-[10px] w-full">
      <h1 className="text-3xl font-bold">HEY!! You are login from {data.userData.userInfo && data.userData.userInfo.branchName}-Branch</h1>
    </div>
  );
};

export default page;