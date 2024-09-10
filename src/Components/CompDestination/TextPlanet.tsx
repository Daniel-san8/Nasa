import React from "react";

type textPlanet = {
  description: string;
  distance: string;
  name: string;
  travel: string;
};

const TextPlanet = ({ textPlanet }: { textPlanet: textPlanet | null }) => {
  if (!textPlanet) return null;
  return (
    <div className="p-6 md:py-10 md:px-20">
      <div className="relative py-6 flex flex-col items-center after:content-[' '] after:w-5/6 after:h-0.5 after:absolute after:bottom-0 after:bg-barra-after after:opacity-25 md:after:w-11/12">
        <h1 className="text-6xl text-white pb-5">{textPlanet.name}</h1>
        <p className="text-blue-secondary text-sm text-center px-6 leading-7">
          {textPlanet.description}
        </p>
      </div>

      <div className="pt-6 md:flex md:justify-around">
        <div className="flex flex-col items-center pb-6 gap-y-3 md:flex-initial">
          <h2 className="text-blue-secondary text-sm">Med. Distancia</h2>
          <h3 className="text-white text-3xl">{textPlanet.distance}</h3>
        </div>
        <div className="flex flex-col items-center pb-6 gap-y-3">
          <h2 className="text-blue-secondary text-sm">
            Tempo de viagem estimado
          </h2>
          <h3 className="text-white text-3xl">{textPlanet.travel}</h3>
        </div>
      </div>
    </div>
  );
};

export default TextPlanet;
