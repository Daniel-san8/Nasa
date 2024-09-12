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

  if (!data) return null;
  const { crew } = data;

  const personaSelect = crew.find((comander) => comander.name === persona);

  return (
    <div className="p-6 flex flex-col items-center h-full">
      <h1 className="text-white tracking-wide ">
        <span className="font-bold opacity-25 pr-6 lg:text-nowrap ">02</span>
        Escolha sua tripulação
      </h1>

      <TextCrew persona={personaSelect} />

      <ul className="flex pt-12 gap-x-4">
        <li ref={douglasRef} className="h-2 w-2 bg-white rounded"></li>
        <li ref={markRef} className="h-2 w-2 bg-white rounded"></li>
        <li ref={victorRef} className="h-2 w-2 bg-white rounded"></li>
        <li ref={anoushehRef} className="h-2 w-2 bg-white rounded"></li>
      </ul>

      <ImageCrew image={personaSelect?.images.png} />
    </div>
  );
};

export default Crew;
