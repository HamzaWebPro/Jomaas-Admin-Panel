"use client"

import React, { useState, useEffect } from 'react';
import { LiaSearchSolid } from "react-icons/lia";
import { FaXmark } from "react-icons/fa6";
import { FaCheck, FaTimesCircle } from "react-icons/fa";

const page = () => {

    const [dataArr, setDataArr] = useState([])
    const [clickedIndex, setClickedIndex] = useState(null);
    const [closeAcceptBtn, setCloseAcceptBtn] = useState(false);
    const [showOrderDetail, setShowOrderDetail] = useState(false)

    const handleButtonClick = (index) => {
        setClickedIndex(index);
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
            <div className="pendingOrder-head">
                <h2 className='text-3xl font-bold text-center mt-5 text-p-red'>Pending Orders</h2>
            </div>

            <div className="w-full pendingOrder-search mt-[40px] pb-[30px] flex justify-end items-center">
                <div className="search-right">
                    <h2 className='font-bold text-[20px] text-p-red mb-[20px]'>Search By Order ID</h2>
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
                                    <button className='accept-btn  px-[30px] py-[10px]  -lg bg-green-500 text-white cursor-pointer'
                                    key={index}
                                    onClick={() => handleButtonClick(index, setCloseAcceptBtn(!closeAcceptBtn))}>
                                        <FaCheck className='font-semibold text-[18px]' />
                                    </button>
                                    {
                                    clickedIndex  && closeAcceptBtn == true
                                    ?
                                    <div className="inner-button bg-[#f1f1f1] p-[10px] rounded-lg absolute top-[22px] left-[50%] translate-x-[-50%] flex flex-col jutify-center items-center gap-2 mt-[20px]">
                                        <button className='px-[30px] py-[5px] rounded-lg bg-blue-500 text-white font-semibold text-[18px] cursor-pointer'>1</button>
                                        <button className='px-[30px] py-[5px] rounded-lg bg-blue-500 text-white font-semibold text-[18px] cursor-pointer'>2</button>
                                        <p>Accept</p>
                                    </div>
                                    :
                                     ""
                                    }
                            </div>
                            <button className='px-[30px] py-[10px] rounded-lg bg-red-500 text-white cursor-pointer'>
                                <FaXmark className='font-semibold text-[18px]'/>
                            </button>
                            <button className='px-[30px] py-[5px] rounded-lg bg-blue-500 text-white font-semibold text-[18px] cursor-pointer' 
                            onClick={()=> setShowOrderDetail(true) }
                            >
                                Detail
                            </button>
                            
                        </div>
                    </div>
                    
                ))} 
                {/* order details modal start */}
                    {showOrderDetail && (
                        <div className="z-[9999999] fixed left-0 top-0  flex h-[100vh] w-full justify-center overflow-y-scroll  bg-[#000000cd] px-[10px] py-[20px]">
                                  <div className="relative w-full   rounded-lg bg-[#f3f3f3] py-5 pl-3 pr-1 md:w-[350px] lg:w-[450px]">
                                    <div className="absolute  right-[-10px] top-[-10px] h-[20px] w-[20px] rounded-full bg-white text-[30px]"></div>
                                    <FaTimesCircle
                                      onClick={() => {
                                        setShowOrderDetail(false);
                                      }}
                                      className="absolute right-[-15px]  top-[-15px] cursor-pointer text-[30px] text-p-blue"
                                    />

                                    <div className="w-full h-full overflow-y-scroll">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempora ipsa, aspernatur nulla quas optio itaque culpa fugit quisquam! Molestiae voluptate repellendus optio quidem quam facilis temporibus amet consequatur a aliquid? Ipsa, itaque minima dolor, odit ab eaque nam quod deserunt, eveniet nesciunt exercitationem. Facere obcaecati quasi est beatae ut totam soluta cupiditate dolores veritatis. Illo est velit earum sed magni mollitia aperiam fugit, inventore recusandae architecto, iste totam nobis obcaecati vero id quis animi quo odit ab molestias blanditiis explicabo aliquam. Quod itaque esse nihil accusamus nobis illum et nam blanditiis explicabo asperiores cupiditate odit dolores ab velit ipsam placeat, tempora corrupti perferendis ut id ea magnam. Sit qui, nesciunt consectetur accusamus temporibus voluptatibus a quam optio excepturi. Eos rerum sapiente suscipit, odio aliquid perferendis ut asperiores sed eveniet. Itaque, vitae. Ipsa similique tenetur temporibus fugit! Vitae cumque adipisci maxime eum sint esse alias illo saepe et. Dolorum expedita dolor animi nesciunt necessitatibus a, delectus voluptatibus atque, eveniet veniam explicabo nobis autem rem. Inventore totam corporis rerum laboriosam natus nesciunt blanditiis. Id reprehenderit nemo alias! Tempora maxime provident, aperiam corporis sunt autem assumenda ratione qui earum distinctio laborum, expedita aut explicabo voluptate eligendi natus laboriosam incidunt cum nemo dolorem numquam? Commodi doloribus quidem repudiandae temporibus quibusdam, blanditiis eaque nam doloremque aut similique eligendi id? Est cumque blanditiis obcaecati. Quam quidem fugit quasi maiores, odio omnis, pariatur perferendis repellendus quo voluptates nobis sed reprehenderit possimus aut praesentium. Suscipit eos deserunt magni sed, totam tempora. Aut asperiores nobis accusamus cupiditate blanditiis, magnam aperiam voluptate animi id! Magnam, asperiores ut quos harum deleniti exercitationem repellendus omnis dignissimos eligendi! Minus, nemo consequatur dolorum quam soluta veniam beatae, fuga praesentium, libero atque laboriosam. Dolore tenetur aliquam sit aperiam. Sit eveniet quasi ipsam! Eius minus officia culpa, obcaecati quo illum porro repudiandae! Culpa obcaecati molestiae nobis et vel, optio neque fugiat distinctio non earum doloribus iste quibusdam similique impedit minima sequi. Ipsum recusandae exercitationem impedit debitis rem modi, vel fuga aperiam laboriosam necessitatibus nihil architecto assumenda reprehenderit temporibus delectus. Quisquam maiores, autem possimus obcaecati architecto molestias nobis necessitatibus expedita aliquid veritatis aut delectus voluptatibus vero saepe laboriosam, fugiat blanditiis ipsa eligendi voluptatum cumque. Facilis pariatur eveniet unde eum fuga aspernatur laboriosam totam voluptate accusamus numquam eos, beatae iusto labore odit mollitia corporis temporibus maiores blanditiis, voluptatum, cumque asperiores porro neque qui doloremque. Rem explicabo, ullam sequi vitae, corrupti temporibus officia cum odio consequuntur omnis fugiat praesentium similique? Fugiat assumenda architecto ipsa reprehenderit quisquam veritatis aliquam quaerat dignissimos, quas hic, rem magnam velit corrupti excepturi, voluptatem vel est ratione explicabo nisi obcaecati numquam. Tempore tenetur quisquam, accusamus, adipisci laborum assumenda ipsam, quae velit saepe beatae minima. Aliquam nam quis pariatur amet quas voluptates. Ratione enim voluptate nam porro labore dolorem, temporibus quibusdam laborum ea tempore a inventore sapiente impedit unde assumenda exercitationem atque. Veniam voluptates architecto incidunt minima minus, temporibus dolores tempore non suscipit tenetur laborum modi veritatis accusamus, consequatur, necessitatibus quo! Blanditiis possimus consectetur deleniti. Eligendi nulla sint at eum aspernatur voluptatem maiores porro earum quaerat quibusdam, voluptatum perferendis adipisci deserunt eius sed, velit aliquam nam officia consequatur repudiandae totam suscipit blanditiis odio. Aut officiis voluptate recusandae blanditiis. Obcaecati consequatur quo iure placeat, repudiandae corrupti possimus! Laborum eveniet ducimus iusto officiis amet et ea dolorem illo autem adipisci corporis asperiores repudiandae maxime consequatur architecto est culpa vero provident expedita sit, neque, nam molestiae! Labore minus voluptates ipsum recusandae saepe, corrupti sunt molestiae neque non minima libero nulla atque amet eaque nobis! Quam, aperiam enim. Molestiae iure fuga porro distinctio ipsum natus aspernatur nostrum ab obcaecati similique, perferendis quasi inventore sequi est fugiat. Ducimus maxime deleniti magni quia, assumenda architecto pariatur numquam fugit velit fugiat? Cupiditate incidunt vitae placeat rerum accusamus maiores voluptates est unde ea eum dicta ratione quis aliquam ab facilis temporibus, molestiae repudiandae nesciunt harum nostrum magnam deleniti dolorem, ipsa veritatis. Maiores at non illo alias, corrupti necessitatibus repudiandae consectetur eaque delectus mollitia, cum magni laborum sunt amet, facilis repellat ipsam doloribus ullam? Perspiciatis laboriosam quae earum a est, quas, harum, iusto quod non quis nam vel voluptas! Molestias consequatur laudantium ab reiciendis vitae, incidunt sunt esse voluptate quasi? Animi tempora laboriosam sapiente qui tempore nisi nulla eos eius similique eligendi blanditiis voluptatibus, a amet ipsa magni optio perspiciatis distinctio officiis nemo repellendus debitis ullam ad voluptatem. Molestiae, sunt perferendis fugiat culpa ex dolorum assumenda atque provident quod. Dolorum, reprehenderit labore? Corrupti architecto eos tenetur optio, et id, perspiciatis repudiandae deleniti voluptatem dignissimos consectetur blanditiis eaque alias quam reprehenderit, dicta autem modi vel iusto. Ad deserunt reiciendis facere necessitatibus inventore, obcaecati officia facilis at vitae, praesentium omnis, ipsa fugiat magnam? Dolor ratione alias error, sit tenetur exercitationem repellat similique corrupti nisi consectetur hic corporis, reiciendis accusantium aliquid in qui dolorem obcaecati. Quas id, sequi laboriosam quibusdam exercitationem ullam, sapiente neque officiis ipsam dolores dolorum ducimus! Inventore perferendis consequatur amet qui vero dolor debitis, doloribus nesciunt odit iure assumenda placeat nihil ex dicta tempora dolorum commodi dolore ad excepturi id impedit, iusto velit ratione. Et, odit! Quibusdam ducimus nihil porro voluptatibus esse officiis saepe quas nesciunt accusamus quia ad ab tempora eum dolore, facere quod quaerat autem perspiciatis optio maxime velit? Culpa maiores consequuntur sunt minus eveniet cupiditate! Perspiciatis itaque nulla aliquid culpa unde omnis distinctio beatae atque animi laudantium in esse rerum nostrum aperiam eum officiis a, tempora delectus sed architecto? Quas nihil delectus qui ratione explicabo modi quos! Totam saepe omnis, maiores rerum quo hic doloribus excepturi molestias ipsum reprehenderit perferendis magnam deleniti porro? Eum, alias! Inventore nulla molestias natus quod quo nam, expedita incidunt suscipit blanditiis tempora temporibus odit error tempore nihil et recusandae ab delectus ipsum omnis! Ea perspiciatis quo ducimus dolorem possimus eligendi, perferendis molestiae doloremque dolores mollitia fugiat laudantium earum iure voluptates, asperiores quia expedita minima? Voluptatum quae ad voluptas architecto. Debitis assumenda maxime harum nesciunt, numquam exercitationem necessitatibus, cum sapiente rerum sit aspernatur dolorum fuga temporibus facere esse iure consectetur. Maiores, deleniti! Facilis fuga soluta eligendi sint, cupiditate corrupti nam earum, beatae, ea nesciunt doloremque! Suscipit, mollitia.
                                    </div>
                        
                                    
                                  </div>
                                </div>
                        
                    )}
                {/* order details modal end */}
                </div>
            </div>
        </div>
    )
}


export default page
