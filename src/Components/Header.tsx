import React from "react";
import { globalUse } from "../Context/GlobalContext";

const Header = () => {
  const { menuActive, setMenuActive } = globalUse();

  return (
    <header className="flex items-center justify-between lg:pt-10 ">
      <div className="h-full m-full px-6 py-6 md:px-10">
        <img src="shared/logo.svg" alt="logo" />
      </div>
      <nav
        className="px-8 md:hidden"
        onClick={() => setMenuActive(!menuActive)}
      >
        <img
          className="cursor-pointer"
          src="shared/icon-hamburger.svg"
          alt="hamburguer"
        />
      </nav>

      <div className="hidden md:flex pl-24 pr-12 h-24 self-start  bg-white backdrop-filter bg-opacity-5 backdrop-blur-xl lg:backdrop-blur-sm lg:before-content ">
        <div className="font-barlow text-white tracking-widest self-center lg:pr-16">
          <ul className="flex whitespace-nowrap">
            <li>
              <span className="font-bold mr-3 ml-10 after-content cursor-pointer">
                00
              </span>
              <span className="cursor-pointer">Home</span>
            </li>
            <li>
              <span className="font-bold mr-3 ml-10 cursor-pointer">01</span>
              <span className="cursor-pointer">Destination</span>
            </li>
            <li>
              <span className="font-bold mr-3 ml-12 cursor-pointer">02</span>
              <span className="cursor-pointer">Crew</span>
            </li>
            <li>
              <span className="font-bold mr-3 ml-12 cursor-pointer">03</span>
              <span className="cursor-pointer">Technology</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
