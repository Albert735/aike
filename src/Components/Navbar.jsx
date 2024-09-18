// import React from 'react'
import Search from "./ui/Search";
import ActionIcons from "./ui/ActionIcons";
import arrow from "../assets/icons/icons8-arrow-down-90.png";
import menubar from "../assets/icons/icons8-menu-100.png";
import close from "../assets/icons/icons8-close-144.png";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggling = () => setOpen(!open);
  const toggleClose = () => setOpen(!open);

  const [options, setOption] = useState(true);

  const toggleOptions = () => {
    setOption(!options);
  };

  return (
    <div className="logo flex w-[100%] max-w-screen-2xl mx-auto justify-between items-center py-5 px-5 md:px-10">
      <div className="flex flex-row justify-center items-center gap-5">
        <h1 className="CisalackSignature font-bold xl:text-[2rem] text-[1.5rem]">
          AIKE
        </h1>
        <div className="Golanerounded hidden text-md  xl:flex flex-row px-5 py-1">
          <ul className="flex flex-row  gap-7">
            <span className="flex justify-center items-center gap-1">
              <li>Category</li>
              <img src={arrow} alt="" className="h-4 w-4" />
            </span>
            <li>Promo</li>
            <li>Interior Design</li>
            <li>Product Recommendation</li>
          </ul>
        </div>
      </div>

      <div>
        <img
          onClick={toggling}
          src={menubar}
          alt=""
          className="h-7 w-7 xl:hidden "
        />
      </div>
      {open && (
        <div className="absolute top-0 right-0 xl:hidden flex flex-col justify-center items-center gap-5 bg-white h-screen w-screen">
          <img
            src={close}
            alt=""
            className="absolute top-5 right-5 h-7 w-7"
            onClick={toggleClose}
          />
          <Search />
          <ul className=" Golanerounded flex flex-col gap-7 p-3 items-center">
            <span
              onClick={toggleOptions}
              className="flex justify-center items-center gap-1"
            >
              <li>Category</li>
              {options ? (
                <img src={arrow} alt="" className="h-4 w-4" />
              ) : (
                <img src={arrow} alt="" className="h-4 w-4 rotate-180" />
              )}
            </span>
            {!options && (
              <ul className="flex flex-col gap-7 w-[15rem] bg-gray-100 rounded-md p-5 transition-all duration-300 delay-75 ease-in-out">
                <li>Living Room</li>
                <li>Bed room</li>
                <li>Dining Room</li>
                <li>Home Office</li>
              </ul>
            )}
            <li>Promo</li>
            <li>Interior Design</li>
            <li>Product Recommendation</li>
          </ul>
        </div>
      )}
      <div className="hidden  xl:flex justify-between items-center gap-10">
        <Search />
        <ActionIcons />
      </div>
    </div>
  );
};
