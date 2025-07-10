"use client";

import React, { useState } from "react";
import Buttonregist from "../Buttonregist";
import Searchhome from "../Searchhome";
const Navbar = () => {
  const [navbar] = useState([
    {
      name: "Services",
    },
    {
      name: "Services",
    },
    {
      name: "Services",
    },
    {
      name: "Services",
    },
    {
      name: "Services",
    },
  ]);

  return (
    <header className="flex w-7xl mx-auto justify-around items-center text-center top-10 ">
      {/* Logo */}
      <div className="flex">
        <a>SaasCandy</a>
      </div>

      {/* Navbar */}

      <nav className="hidden sm:ml-6 sm:block xl:ml-0 lg:ml-0 md:ml-0">
        <div>
          <a className="flex gap-10 top-12">
            {navbar.map((items) => (
              <div
                className=" font-manrope font-medium leading-5 text-md"
                key={items.id}
              >
                {items.name}
              </div>
            ))}
          </a>
        </div>
      </nav>

      {/* Search And Button */}
      <div className=" lg:flex hidden md:flex sm:ml-6 sm:block xl:ml-0 lg:ml-0 md:ml-0 ">
        <Searchhome />
        <Buttonregist />
      </div>
    </header>
  );
};

export default Navbar;
