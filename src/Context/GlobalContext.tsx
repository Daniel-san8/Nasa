import React, { PropsWithChildren } from "react";

interface UIGlobal {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
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

  return (
    <global.Provider value={{ menuActive, setMenuActive }}>
      {children}
    </global.Provider>
  );
};
