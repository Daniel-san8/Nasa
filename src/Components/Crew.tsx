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
  const teste = React.useRef<HTMLUListElement>(null);

  const [persona, setPersona] = React.useState("Douglas Hurley");

  const personaSelect = data?.crew.find(
    (comander) => comander.name === persona
  );

  const [estiloSelectAtivo] = React.useState(
    "h-2 w-2 bg-white rounded cursor-pointer"
  );
  const [estiloSelectDesativado] = React.useState(
    "h-2 w-2 bg-barra-after opacity-25 rounded cursor-pointer"
  );

  function pegarId(e?: React.MouseEvent<HTMLLIElement>) {
    if (teste.current) {
      const filhos = teste.current.childNodes;
      const ok = [...filhos] as HTMLLIElement[];
      ok.forEach((item) => (item.className = estiloSelectDesativado));
    }
    const idTarget = e?.target as HTMLLIElement;
    setPersona(idTarget.id);
    idTarget.className = estiloSelectAtivo;
  }

  if (!data) return null;

  return (
    <div className="p-6 flex flex-col items-center h-full">
      <h1 className="text-white tracking-wide ">
        <span className="font-bold opacity-25 pr-6 lg:text-nowrap ">02</span>
        Escolha sua tripulação
      </h1>

      <TextCrew persona={personaSelect} />

      <ul className="flex pt-12 gap-x-4" ref={teste}>
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

      <ImageCrew image={personaSelect?.images.png} />
    </div>
  );
};

export default Crew;
