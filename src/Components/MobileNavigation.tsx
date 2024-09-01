import React from "react";

const MobileNavigation = () => {
  return (
    <div className="flex flex-col absolute top-0 right-0 bg-blue-700 px-6 z-10">
      <div className="self-end">
        <img
          className="right-6 cursor-pointer"
          src="shared/icon-close.svg"
          alt="X"
        />
      </div>
      <div className="font-barlow text-white tracking-widest">
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
      </div>
    </div>
  );
};

export default MobileNavigation;
