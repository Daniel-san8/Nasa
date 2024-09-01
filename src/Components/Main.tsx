import React from "react";

const Main = () => {
  return (
    <main className="font-bellefair p-12 text-blue-secondary">
      <div className="flex flex-col items-center justify-center gap-y-12">
        <h1 className="text-xs tracking-widest">
          ENTÃO, VOCÊ QUER VIAJAR PARA O
        </h1>
        <h2 className="text-white text-6xl">ESPAÇO</h2>
        <p className="font-barlow text-center text-sm tracking-widest leading-6">
          Vamos encarar; se você quiser ir para o espaço, pode realmente ir para
          o espaço sideral e não ficar pairando na borda dele. Então, sente-se e
          relaxe, porque nós lhe daremos uma experiência verdadeiramente fora
          deste mundo!
        </p>
      </div>
      <div className="flex justify-center px-20 py-24">
        <button className="text-blue-primary text-2xl bg-white cursor-pointer px-10 py-14 rounded-full">
          Explorar
        </button>
      </div>
    </main>
  );
};

export default Main;
