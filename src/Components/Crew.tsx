import React from "react";
import { globalUse } from "../Context/GlobalContext";
import TextCrew from "./CompCrew/TextCrew";
import ImageCrew from "./CompCrew/ImageCrew";

const Crew = () => {
  const { data } = globalUse();

  const douglasRef = React.useRef<HTMLLIElement>(null);
  const markRef = React.useRef<HTMLLIElement>(null);
  const victorRef = React.useRef<HTMLLIElement>(null);
  const anoushehRef = React.useRef<HTMLLIElement>(null);
  const ulPai = React.useRef<HTMLUListElement>(null);

  const [persona, setPersona] = React.useState("Douglas Hurley");

  // pega o objeto específico pra retornar
  const personaSelect = data?.crew.find(
    (comander) => comander.name === persona
  );

  const estiloSelectAtivo =
    "h-2 w-2 bg-white rounded cursor-pointer lg:h-3 lg:w-3 lg:rounded-lg";
  const estiloSelectDesativado =
    "h-2 w-2 bg-barra-after opacity-25 rounded cursor-pointer lg:h-3 lg:w-3 lg:rounded-lg";

  function pegarId(e?: React.MouseEvent<HTMLLIElement>) {
    const idTarget = e?.target as HTMLLIElement;
    setPersona(idTarget.id);
    atualizaEstilo(idTarget);
  }

  function atualizaEstilo(id: HTMLLIElement) {
    if (ulPai.current) {
      const ulFilhos = ulPai.current.childNodes;
      const arrUlFilhos = [...ulFilhos] as HTMLLIElement[];
      arrUlFilhos.forEach((item) => (item.className = estiloSelectDesativado));
    }
    id.className = estiloSelectAtivo;
  }

  if (!data) return null;

  return (
    <div className="p-6 flex flex-col items-center justify-center lg:h-screen lg:flex-row lg:px-40">
      <div className="h-full flex flex-col items-center lg:h-full">
        <h1 className="text-white tracking-wide md:self-start md:pt-10 lg:pb-14">
          <span className="font-bold opacity-25 pr-6 lg:text-nowrap ">02</span>
          Escolha sua tripulação
        </h1>

        <TextCrew persona={personaSelect} />

        <ul
          className="flex pt-12 gap-x-4 lg:self-start lg:pt-32 lg:pb-16"
          ref={ulPai}
        >
          <li
            ref={douglasRef}
            className={estiloSelectAtivo}
            id="Douglas Hurley"
            onClick={pegarId}
          ></li>
          <li
            ref={markRef}
            className={estiloSelectDesativado}
            id="Mark Shuttleworth"
            onClick={pegarId}
          ></li>
          <li
            ref={victorRef}
            className={estiloSelectDesativado}
            id="Victor Glover"
            onClick={pegarId}
          ></li>
          <li
            ref={anoushehRef}
            className={estiloSelectDesativado}
            id="Anousheh Ansari"
            onClick={pegarId}
          ></li>
        </ul>
      </div>

      <ImageCrew image={personaSelect?.images.png} />
    </div>
  );
};

export default Crew;
