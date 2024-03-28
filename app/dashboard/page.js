"use client"
import React from "react";
import Image from "next/image";
import {  useSelector } from "react-redux";

const page = () => {
  let data = useSelector((state) => state);
  return (
    <div className="dashboard-head w-full">
      <div className="pt-[80px] p-[10px] w-full">
      <h1 className="text-3xl font-bold text-center mt-5 text-p-red">Welcome to Dashboard</h1>
    </div>

      <div className="dashboard-content p-[15px] mt-[50px]">
          <div className="content-inner w-full  flex col lg:row justify-center gap-4 flex-wrap">
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
              <div className="flex flex-col justity-center items-center w-full lg:w-[23%] shadow-lg py-[25px] rounded-lg">
                  <h2 className="font-bold text-[20px] text-p-red">Title 1</h2>
                  <h3 className="font-bold text-[50px] text-p-blue">$40</h3>
              </div>
            </div>
        </div>
    </div>
  );
};

export default page;