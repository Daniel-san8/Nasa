import axios from "axios";
import React, { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

interface UIGlobal {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  data: UIData | null;
}

type Crew = {
  bio: string;
  images: {
    png: string;
    webp: string;
  };
  name: string;
  role: string;
};

export type Destinations = {
  description: string;
  distance: string;
  images: {
    png: string;
    webp: string;
  };
  name: string;
  travel: string;
};

type Technology = {
  description: string;
  images: {
    png: string;
    webp: string;
  };
  name: string;
};

interface UIData {
  crew: Crew[];
  destinations: Destinations[];
  technology: Technology[];
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

  // Função para puxar dados da API estática

  const [data, setData] = React.useState<UIData | null>(null);

  React.useEffect(() => {
    async function reqApi() {
      try {
        const api = axios.get("data.json");
        const { data } = await api;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    reqApi();
  }, []);

  return (
    <global.Provider value={{ menuActive, setMenuActive, pathname, data }}>
      {children}
    </global.Provider>
  );
};
