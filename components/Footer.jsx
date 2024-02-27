import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-gray-400 flex items-center justify-between py-2 ">
      <div className="">
        <FaRegBuilding size={25} />
      </div>
      <div className="">
        All rights reserved &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
