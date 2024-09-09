import React from "react";
import { globalUse } from "../Context/GlobalContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { menuActive, setMenuActive } = globalUse();

  return (
    <header className="flex items-center justify-between lg:pt-10 ">
      <div className="h-full px-6 py-6 md:px-0 md:pl-5">
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

      <div className="hidden md:flex pl-24 h-24 self-start  bg-white backdrop-filter bg-opacity-5 backdrop-blur-xl lg:backdrop-blur-sm lg:before-content ">
        <div className="font-barlow text-white tracking-widest self-center lg:pr-16">
          <ul className="flex whitespace-nowrap pr-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? "after-content" : ""
                }
              >
                <span className="font-bold mr-3 ml-10 cursor-pointer">00</span>
                <span className="cursor-pointer">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="destination"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? "after-content-destination" : ""
                }
              >
                <span className="font-bold mr-3 ml-10 cursor-pointer">01</span>
                <span className="cursor-pointer">Destination</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="crew"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? "after-content-crew" : ""
                }
              >
                <span className="font-bold mr-3 ml-12 cursor-pointer">02</span>
                <span className="cursor-pointer">Crew</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="technology"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? "after-content-technology" : ""
                }
              >
                <span className="font-bold mr-3 ml-12 cursor-pointer">03</span>
                <span className="cursor-pointer">Technology</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
