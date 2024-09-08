import React, { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

interface UIGlobal {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

const global = React.createContext<UIGlobal | null>(null);

export const globalUse = () => {
  const context = React.useContext(global);

  if (context === null) {
    throw new Error("Contexto inválido");
  }

  return context;
};

export const ProviderGlobal = ({ children }: PropsWithChildren) => {
  //estado do menu mobile

  const [menuActive, setMenuActive] = React.useState(false);

  //location

  const { pathname } = useLocation();

  return (
    <global.Provider value={{ menuActive, setMenuActive, pathname }}>
      {children}
    </global.Provider>
  );
};
