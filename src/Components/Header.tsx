import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between lg:pt-10">
      <div className="h-full m-full px-6 py-6 md:px-10">
        <img src="shared/logo.svg" alt="logo" />
      </div>
      <nav className="px-8 md:hidden">
        <img
          className="cursor-pointer"
          src="shared/icon-hamburger.svg"
          alt="hamburguer"
        />
      </nav>
      <div className="hidden before-content md:flex pl-24 pr-12 h-24 self-start  bg-white backdrop-filter bg-opacity-5 backdrop-blur-xl lg:backdrop-blur-sm ">
        <div className="font-barlow text-white tracking-widest self-center lg:pr-16">
          <ul className="flex">
            <li>Home</li>
            <li>
              <span className="font-bold pr-3 pl-10">01</span>Destination
            </li>
            <li>
              <span className="font-bold pr-3 pl-12">02</span>Crew
            </li>
            <li>
              <span className="font-bold pr-3 pl-12">03</span>Technology
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
