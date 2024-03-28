"use client"

import React, { useState, useEffect } from 'react';

import { LiaSearchSolid } from "react-icons/lia";
import { FaXmark } from "react-icons/fa6";
// import { FaCheck } from "react-icons/fa";

const page = () => {

    const [dataArr, setDataArr] = useState([])
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleButtonClick = (index) => {
        setClickedIndex(index);
        setAcceptButtonOpen(true)
      };

    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push(i);
        }
        setDataArr(data);
    };

    useEffect(() => {
        generateData();
    }, []);

    return (
        <div className="pt-[80px] p-[10px] w-full">
            <div className="customerOrder-head">
                <h2 className='text-3xl font-bold text-center mt-5 text-p-red'>Customer</h2>
            </div>

            <div className="w-full customer-search mt-[40px] pb-[30px] flex justify-end items-center">
                <div className="search-main">
                    <h2 className='font-bold text-[20px] text-p-red mb-[20px]'>Find Customer By Name</h2>
                    <form action="">
                        <div className=" flex gap-2 items-center border border-red p-[15px] rounded-lg">
                            <LiaSearchSolid className='text-[30px]' />
                            <input className='w-full outline-none' type="text" placeholder='Search' />
                        </div>
                    </form>
                </div>
            </div>

            <div className="pendingOrder-main w-full">

                <div className="pendingOrder-inner flex flex-col flex-col-reverse flex-wrap gap-[50px] justify-center items-center">
                    {dataArr.map((item, index) => (

                        <div key={index} className="rounded-lg shadow-lg p-[25px] my-[15px] w-full">

                            {/* Sumon's code here */}
                            <div className="blank"></div>

                            <p className='text-center pb-[30px] font-bold text-[50px] text-p-blue'>{item}</p>
                            <div className="btn-main flex gap-3 justify-end items-center">
                                <div className="accept-btn-box relative">
                                   
                            </div>
                            <button className='px-[30px] py-[5px] rounded-lg bg-red-500 text-white font-semibold text-[18px] cursor-pointer'>
                                Block
                            </button>
                            <button className='px-[30px] py-[5px] rounded-lg bg-green-500 text-white font-semibold text-[18px] cursor-pointer'>
                                Unblock
                            </button>
                            
                        </div>
                    </div>
                    
                ))}
                </div>
            </div>

        </div>
    )
}

export default page
