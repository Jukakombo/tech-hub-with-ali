"use client";
import React, { useState } from "react";
import Links from "./Links";
import Link from "next/link";
import { navigations } from "./nav_links";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const session =true;
  const isAdmin = true;
  return (
    <div className="">
      <div className="my-2  flex items-center justify-between text-white">
        <div className="logo">
          <Link href={"/"}>
            <IoLogoFreebsdDevil size={40} />
          </Link>
        </div>
        <div className="desktop hidden md:block">
          <Links />
        
        </div>
        <div onClick={() => setOpen((prev) => !prev)} className="md:hidden">
          {open ? <GrClose size={25} /> : <GiHamburgerMenu size={25} />}
        </div>
      </div>
      {/* mobile navigation */}
      {open && (
        <div className="mobile bg-[#2D2B42] h-screen absolute top-[80px] right-0 w-[80%] m-auto">
          <div className="p-4">
            {navigations.map((item) => (
              <div className="" key={item._id}>
                <ul className="">
                  <Link href={`${item.path}`}>
                    <li className="my-4" onClick={() => setOpen(false)}>
                      {item.title}
                    </li>
                  </Link>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
