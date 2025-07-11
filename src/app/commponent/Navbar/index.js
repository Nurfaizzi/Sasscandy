"use client";

import React, { useState } from "react";
import Buttonregist from "../Buttonregist";
import Searchhome from "../Searchhome";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from '@mui/icons-material/Close';
import Responsivenavbar from "../Responsivenavbar"

const Navbar = () => {
  const navbar = [
    {
      name: "Services",
    },
    {
      name: "Pricing",
    },
    {
      name: "Elements",
    },
    {
      name: "Blog",
    },
  ];



  return (
   
<header className="flex max-w-screen lg:mx-auto  lg:justify-around xl:justify-around md:justify-around justify-between  items-center lg:pt-6 xl:pt-6 md:pt-6 ">
      {/* Logo */}
      <div className="lg:flex md:flex xl:flex hidden justify-between ">
        <a className="">SaasCandy</a>
        
      </div>

      {/* Navbar */}

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex items-center ">

          {/* Mobile */}
         
          <Responsivenavbar/>
         
          <div className="hidden w-full md:block md:w-auto">
            <nav className="hidden sm:ml-6 sm:block xl:ml-0 lg:ml-0 md:ml-0">
              <div>
                <div className="flex gap-10 top-12">
                  {navbar.map((items) => (
                    <a
                      key={items.id}
                      className=" font-manrope font-medium leading-5 text-md "
                    >
                      {items.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>

      {/* Search And Button */}
      <div className=" lg:flex hidden w-full md:w-auto md:flex gap-5 ">
        <Searchhome />
        <Buttonregist />
      </div>
    </header>


    
  );
};

export default Navbar;
