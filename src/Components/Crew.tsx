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

  const [persona, setPersona] = React.useState("Douglas Hurley");

  const personaSelect = data?.crew.find(
    (comander) => comander.name === persona
  );

  React.useEffect(() => {
    console.log("opa");
  }, [persona]);

  function pegarId(e?: React.MouseEvent<HTMLLIElement>) {
    const idTarget = e?.target as HTMLLIElement;
    setPersona(idTarget.id);
  }

  if (!data) return null;

  return (
    <div className="p-6 flex flex-col items-center h-full">
      <h1 className="text-white tracking-wide ">
        <span className="font-bold opacity-25 pr-6 lg:text-nowrap ">02</span>
        Escolha sua tripulação
      </h1>

      <TextCrew persona={personaSelect} />

      <ul className="flex pt-12 gap-x-4">
        <li
          ref={douglasRef}
          className="h-2 w-2 bg-white rounded"
          id="Douglas Hurley"
          onClick={pegarId}
        ></li>
        <li
          ref={markRef}
          className="h-2 w-2 bg-barra-after opacity-25 rounded"
          id="Mark Shuttleworth"
          onClick={pegarId}
        ></li>
        <li
          ref={victorRef}
          className="h-2 w-2 bg-barra-after opacity-25 rounded"
          id="Victor Glover"
          onClick={pegarId}
        ></li>
        <li
          ref={anoushehRef}
          className="h-2 w-2 bg-barra-after opacity-25 rounded"
          id="Anousheh Ansari"
          onClick={pegarId}
        ></li>
      </ul>

      <ImageCrew image={personaSelect?.images.png} />
    </div>
  );
};

export default Crew;
