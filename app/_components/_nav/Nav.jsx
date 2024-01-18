"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../_svg/logo.svg";
import { MdOutlinePendingActions } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { RiAddBoxLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const Nav = () => {
  const pathname = usePathname();

  let navdata = [
    {
      navitem: "Dashboard",
      icon: <LuLayoutDashboard />,
      path: "/dashboard",
    },
    {
      navitem: "Pending Orders",
      icon: <MdOutlinePendingActions />,
      path: "/dashboard/pending-orders",
    },
    {
      navitem: "Accepted Orders",
      icon: <GiConfirmed />,
      path: "/dashboard/confirm-orders",
    },

    {
      navitem: "Add Menu",
      icon: <RiAddBoxLine />,
      path: "/dashboard/add-menu",
    },
    {
      navitem: "Customers",
      icon: <FaUsers />,
      path: "/dashboard/customers",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop < 1);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <nav className="h-[100vh] z-[999999]  py-[10px] sticky left-0 top-0 shadow-md inline-block  px-[10px] justify-between bg-p-yellow">
      {(
        <div className="absolute top-[10px] right-[-360px] text-xl md:text-2xl text-p-red font-semibold mt-1 uppercase w-[350px] text-primary-main-blue">
          {pathname === "/dashboard"
            ? "Dashboard"
            : pathname.slice(11, pathname.length)}
        </div>
      )}
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-center">
          <img
            src="https://i.postimg.cc/rwnxStLC/fav.png"
            className="w-[70px] h-auto block md:hidden"
            alt="logo"
          />
          <Image
            src={logo}
            className="w-[150px] h-auto hidden md:block"
            alt="logo"
          />
        </div>
        <ul className="flex flex-col gap-y-2">
          {navdata.map((item, index) => (
            <li
              key={index}
              className="w-[70px]  md:w-[250px]"
              title={item.navitem}
            >
              {" "}
              <Link
                href={item.path}
                className={`${
                  pathname === item.path 
                    ? "bg-p-red text-white"
                    : "text-p-brown shadow-inner"
                } w-full py-[10px] text-center   gap-x-1  rounded-lg flex items-center justify-center duration-200 hover:bg-p-red hover:text-white`}
              >
                {item.icon}{" "}
                <span className="hidden md:block">{item.navitem}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
