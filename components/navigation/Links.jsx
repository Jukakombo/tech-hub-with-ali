"use client";
import React from "react";
import { navigations } from "./nav_links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const session = true;
  const isAdmin=true;
  const pathname = usePathname();

  return (
    <div className="flex items-center  ">
      {navigations.map((item) => (
        <ul
          className={`ml-2 text-lg  ${
            item.path === pathname ? "bg-white text-black px-1 rounded-md" : ""
          } `}
          key={item._id}
        >
          <Link href={`${item.path}`}>
            {" "}
            <li>{item.title}</li>
          </Link>
        </ul>
      ))}

      {
          session?
          <div>
           <Link href={"/admin"}>
           <button className={`ml-2    text-white px-1 rounded-md 
          `}>Admin</button>
           </Link>
          </div>:
          <div  className="ml-2">
            <form action="">
            <Link href="/login"> 
            <button className="bg-blue-600 p-2 rounded-md ">Login</button>
            </Link>
            </form>
          </div>
         }

         {isAdmin && <Link href="/login"> 
            <button className="bg-blue-600 p-2 rounded-md ">Logout</button>
            </Link>}
    </div>
  );
};

export default Links;
