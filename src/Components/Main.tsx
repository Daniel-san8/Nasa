import React from "react";

const Main = () => {
  return (
    <main className="font-bellefair p-6 text-blue-secondary md:px-20 md:py-32 lg:flex lg:px-40 lg:mt-72 lg:gap-x-8 ">
      <div className="flex flex-col items-center justify-center gap-y-12 xl:items-start">
        <h1 className="text-xs tracking-widest md:text-lg">
          ENTÃO, VOCÊ QUER VIAJAR PARA O
        </h1>
        <h2 className="text-white text-6xl md:text-8xl">ESPAÇO</h2>
        <p className="font-barlow text-center text-sm tracking-widest leading-6 lg:text-start">
          Vamos encarar; se você quiser ir para o espaço, pode realmente ir para
          o espaço sideral e não ficar pairando na borda dele. Então, sente-se e
          relaxe, porque nós lhe daremos uma experiência verdadeiramente fora
          deste mundo!
        </p>
      </div>
      <div className="flex justify-center px-20 py-24 md:py-16 md:px-28  xl:ml-72">
        <button className="text-blue-primary text-2xl bg-white cursor-pointer px-10 py-14 rounded-full md:px-16 md:py-24 md:text-3xl ">
          Explorar
        </button>
      </div>
    </main>
  );
};

export default Main;
