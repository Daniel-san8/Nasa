import React from "react";

type Persona = {
  bio: string;
  name: string;
  role: string;
};

const TextCrew = ({ persona }: { persona?: Persona }) => {
  if (persona)
    return (
      <div className="flex flex-col items-center pt-16">
        <h2>{persona.role}</h2>
        <h3>{persona.name}</h3>
        <p className="text-center pt-6">{persona.bio}</p>
      </div>
    );
};

export default TextCrew;
