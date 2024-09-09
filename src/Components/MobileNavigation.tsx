import React from "react";
import { globalUse } from "../Context/GlobalContext";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  const navigation = React.useRef<null | HTMLDivElement>(null);
  const { menuActive, setMenuActive } = globalUse();

  React.useEffect(() => {
    if (menuActive) {
      navigation.current?.classList.remove("hidden");
      navigation.current?.classList.add("flex", "animationMenu");
    } else {
      navigation.current?.classList.remove("flex", "animationMenu");
      navigation.current?.classList.add("hidden");
    }
  }, [menuActive]);

  return (
    <div
      className="hidden flex-col absolute top-0 right-0 bg-blue-primary backdrop-filter bg-opacity-20 backdrop-blur-xl z-10 h-full w-56 md:hidden"
      ref={navigation}
    >
      <div className="self-end py-8 pr-6">
        <img
          className="right-6 cursor-pointer"
          src="shared/icon-close.svg"
          alt="X"
          onClick={() => setMenuActive(!menuActive)}
        />
      </div>
      <div className="font-barlow text-white tracking-widest py-12">
        <ul className="flex flex-col gap-y-8 px-8">
          <li>
            <NavLink to="/">
              <span className="font-bold pr-3">00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="destination">
              <span className="font-bold pr-3">01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="crew">
              <span className="font-bold pr-3">02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="technology">
              <span className="font-bold pr-3">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
