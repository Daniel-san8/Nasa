import { PropsWithChildren } from "react";
import { globalUse } from "../Context/GlobalContext";

const Background = ({ children }: PropsWithChildren) => {
  const { pathname } = globalUse();

  const backgroundClasses: Record<string, string> = {
    "": "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop",
    destination:
      "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop",
    crew: "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop",
  };

  const backgroundClass = backgroundClasses[pathname];
  return (
    <div className={`relative ${backgroundClass} h-full w-full bg-cover`}>
      {children}
    </div>
  );
};

export default Background;
