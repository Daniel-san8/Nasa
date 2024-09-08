import React from "react";

const Destination = () => {
  return (
    <div className="h-full flex flex-col items-center font-barlow">
      <h1 className="text-white tracking-wide p-6">
        <span className="font-bold opacity-25 pr-6">01</span>Escolha o seu
        destino
      </h1>

      <div className="px-6">
        <div className="py-12">
          <img src="destination/image-moon.png" width="150px" height="150px" />
        </div>
      </div>

      <div>
        <ul className="flex text-blue-secondary gap-x-8">
          <li className="cursor-pointer">Moon</li>
          <li className="cursor-pointer">Mars</li>
          <li className="cursor-pointer">Europa</li>
          <li className="cursor-pointer">Titan</li>
        </ul>
      </div>

      <div className="relative py-6 flex flex-col items-center after:content-[' '] after:w-5/6 after:h-0.5 after:absolute after:bottom-0 after:bg-barra-after after:opacity-25">
        <h1 className="text-6xl text-white pb-5">Moon</h1>
        <p className="text-blue-secondary text-sm text-center px-6 leading-7">
          Veja nosso planeta como você nunca viu antes. Uma viagem relaxante,
          perfeita para ajudar a recuperar a perspectiva e voltar revigorado.
          Enquanto estiver lá, conheça um pouco da história visitando os locais
          de pouso da Luna 2 e da Apollo 11.
        </p>
      </div>

      <div className="pt-6">
        <div className="flex flex-col items-center pb-6 gap-y-3">
          <h2 className="text-blue-secondary text-sm">Med. Distancia</h2>
          <h3 className="text-white text-3xl">384,400 km</h3>
        </div>
        <div className="flex flex-col items-center pb-6 gap-y-3">
          <h2 className="text-blue-secondary text-sm">
            Tempo de viagem estimado
          </h2>
          <h3 className="text-white text-3xl">3 dias</h3>
        </div>
      </div>
    </div>
  );
};

export default Destination;
