import React from "react";
import { globalUse } from "../Context/GlobalContext";
import TextCrew from "./CompCrew/TextCrew";
import ImageCrew from "./CompCrew/ImageCrew";

const Crew = () => {
  const { data } = globalUse();
  if (!data) return null;

  const { crew } = data;

  const [persona, setPersona] = React.useState("Douglas Hurley");
  const personaSelect = crew.find((comander) => comander.name === persona);

  return (
    <div className="p-6 flex flex-col items-center h-screen">
      <h1 className="text-white tracking-wide ">
        <span className="font-bold opacity-25 pr-6 lg:text-nowrap ">02</span>
        Escolha sua tripulação
      </h1>

      <TextCrew persona={personaSelect} />

      <ImageCrew />
    </div>
  );
};

export default Crew;
