type Persona = {
  bio: string;
  name: string;
  role: string;
};

const TextCrew = ({ persona }: { persona?: Persona }) => {
  if (persona)
    return (
      <div className="flex flex-col items-center pt-16 md:px-32">
        <h2 className="text-2xl text-blue-secondary">{persona.role}</h2>
        <h3 className="text-4xl text-white">{persona.name}</h3>
        <p className="text-center text-blue-secondary leading-6 pt-6">
          {persona.bio}
        </p>
      </div>
    );
};

export default TextCrew;
