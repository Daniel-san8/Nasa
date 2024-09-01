import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <div className="px-8">
        <img src="shared/logo.svg" alt="logo" />
      </div>
      <div className="px-8">
        <img
          className=" cursor-pointer"
          src="shared/icon-hamburger.svg"
          alt="hamburguer"
        />
        <img
          className="hidden cursor-pointer"
          src="shared/icon-close.svg"
          alt="X"
        />
      </div>
      <nav className="font-barlow text-white tracking-widest bg-blue-primary py-10  ">
        <ul>
          <li>
            <span className="font-bold">00</span>Home
          </li>
          <li>
            <span className="font-bold">01</span>Destination
          </li>
          <li>
            <span className="font-bold">02</span>Crew
          </li>
          <li>
            <span className="font-bold">03</span>Technology
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
