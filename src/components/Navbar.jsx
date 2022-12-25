import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full font-bold text-3xl text-[#09A837] tracking-normal leading-none">
        DataSurge
      </h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Resources</li>
        <li className="p-4">Company</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <GiHamburgerMenu />
      </div>
      <div className="fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]">
        <h1 className="w-full font-bold text-3xl m-4 text-[#09A837] tracking-normal leading-none">
          DataSurge
        </h1>
        <ul className="uppercase" p-4>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
