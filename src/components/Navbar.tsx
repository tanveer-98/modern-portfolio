import React, { useState } from "react";
import { NavLinks } from "../constants";
const Navbar = () => {
  const [close , setToggle] = useState(false)
  return (
    <nav
      className="w-full flex py-6
    justify-between items-center navbar"
    >
      <img src="logo.svg" alt="" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {NavLinks.map((nav, index) => (
          <>
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 last-of-type:mr-0`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          </>
        ))}
      </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={`${close ?"close.svg":"menu.svg"}`}  className={`${close ? "" : ""}`}
          alt = "menu"
          onClick={()=>setToggle((prev)=>!prev)}
          />
        </div>


    </nav>
  );
};

export default Navbar;
