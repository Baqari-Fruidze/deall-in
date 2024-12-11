"use client";
import React from "react";
// import logo from "/forAuth/hands.png";
import burger from "/forBurger/menu-line.svg";
// import dealinText from "/forAuth/dealinText.png";
import logo from "/test.png";
/////git
export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#152C5E] p-[16px]">
      <img src={logo} alt="" className="  w-[190px]" />

      <img src={burger} alt="burger icon" className=" w-[28px] h-[28px]" />
    </div>
  );
}
