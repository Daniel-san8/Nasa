import React, { PropsWithChildren } from "react";
import { globalUse } from "../Context/GlobalContext";

const Background = ({ children }: PropsWithChildren) => {
  const { pathname } = globalUse();

  React.useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <div
      className={`relative bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-full w-full bg-cover`}
    >
      {children}
    </div>
  );
};

export default Background;
