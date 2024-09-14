import React from "react";
import { globalUse } from "../Context/GlobalContext";

const Technology = () => {
  const { data } = globalUse();

  const [indice, setIndice] = React.useState(0);

  if (!data) return null;
  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-white tracking-wide pt-6 pb-20">
        <span className="font-bold opacity-25 pr-6 lg:text-nowrap">03</span>
        Lançamento espacial 101
      </h1>

      <div className="w-full">
        <img
          className="h-72 w-screen"
          src={data.technology[indice]?.images.portrait}
        />
      </div>

      <ul className="flex gap-x-4 pt-8 pb-10">
        <li
          className="bg-white w-10 h-10 flex justify-center items-center rounded-3xl cursor-pointer"
          onClick={() => setIndice(0)}
        >
          1
        </li>
        <li
          className="flex justify-center items-center w-10 h-10 border border-white border-opacity-25 rounded-3xl text-white cursor-pointer"
          onClick={() => setIndice(1)}
        >
          2
        </li>
        <li
          className="flex justify-center items-center w-10 h-10 border border-white border-opacity-25 rounded-3xl text-white cursor-pointer"
          onClick={() => setIndice(2)}
        >
          3
        </li>
      </ul>

      <div className="flex flex-col items-center ">
        <h2 className="text-2xl text-blue-secondary  ">A terminologia</h2>
        <h3 className="text-4xl text-white ">
          {data.technology[indice]?.name}
        </h3>
        <p className="text-center text-blue-secondary leading-6 pt-4 px-6 pb-12">
          {data.technology[indice]?.description}
        </p>
      </div>
    </div>
  );
};

export default Technology;
