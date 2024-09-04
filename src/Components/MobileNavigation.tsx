import React from "react";

const MobileNavigation = () => {
  const close = React.useRef<null | HTMLDivElement>(null);
  const navigation = React.useRef<null | HTMLDivElement>(null);
  React.useEffect(() => {
    function handleMenu() {
      navigation.current?.classList.add("hidden");
    }
    if (close.current && navigation.current) {
      close.current.addEventListener("click", handleMenu);
    }

    return () => {
      close.current?.removeEventListener("click", handleMenu);
    };
  }, [close]);

  return (
    <div
      className="flex flex-col absolute top-0 right-0 bg-blue-primary backdrop-filter bg-opacity-20 backdrop-blur-xl z-10 h-full w-56 md:hidden"
      ref={navigation}
    >
      <div className="self-end py-8 pr-6" ref={close}>
        <img
          className="right-6 cursor-pointer"
          src="shared/icon-close.svg"
          alt="X"
        />
      </div>
      <div className="font-barlow text-white tracking-widest py-12">
        <ul className="flex flex-col gap-y-8 px-8">
          <li>
            <span className="font-bold pr-3">00</span>Home
          </li>
          <li>
            <span className="font-bold pr-3">01</span>Destination
          </li>
          <li>
            <span className="font-bold pr-3">02</span>Crew
          </li>
          <li>
            <span className="font-bold pr-3">03</span>Technology
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
