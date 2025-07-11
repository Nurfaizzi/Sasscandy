"use client";

import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
const Responsivenavbar = () => {
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <div className="flex:none max-w-xl">
      <div className="flex justify-between">
    <h1 className="md:hidden lg:hidden xl:hidden pl-5 flex pt-6">Sasscandy</h1>
        <button
          onClick={toggleMenu}
          className={`lg:hidden xl:hidden md:hidden pl-72 pr-2 pt-6`}
        >
          <DensityMediumIcon />
        </button>
         {isOpen && (
          <div className=" ml-72 pr-72 w-full fixed h-full flex-col lg:hidden md:hidden xl:hidden sm:hidden bg-amber-600 mx-auto text-white gap-3 ">
            <div className="flex justify-between">
              <h1 className="pl-2 pt-6">Sasscandy</h1>
              <button onClick={toggleMenu} className=" flex pt-6  ">
                {" "}
                <CloseIcon />
              </button>
            </div>
          <div className="flex-col pt-8 gap-9 flex pl-2 ">
  {navbar.map((item) => (
              <a className="flex">{item.name}</a>
            ))}
          </div>
          
          </div>
        )}
      </div>
    
       
      </div>
    
  );
};

export default Responsivenavbar;
