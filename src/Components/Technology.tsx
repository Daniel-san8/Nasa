import React from "react";
import { globalUse } from "../Context/GlobalContext";

const Technology = () => {
  const { data } = globalUse();
  if (!data) return null;
  const { technology } = data;

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-white tracking-wide pt-6">
        <span className="font-bold opacity-25 pr-6 lg:text-nowrap">03</span>
        Lançamento espacial 101
      </h1>

      <div>
        <img src={technology[0].images.portrait} />
      </div>

      <ul className="flex gap-x-4">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

      <div className="flex flex-col items-center ">
        <h2 className="text-2xl text-blue-secondary  ">A terminologia</h2>
        <h3 className="text-4xl text-white ">{technology[0].name}</h3>
        <p className="text-center text-blue-secondary leading-6 ">
          {technology[0].description}
        </p>
      </div>
    </div>
  );
};

export default Technology;
