import React from "react";
import { globalUse } from "../Context/GlobalContext";
import ImagePlanet from "./CompDestination/ImagePlanet";
import TextPlanet from "./CompDestination/TextPlanet";

const Destination = () => {
  const { data } = globalUse();
  if (!data) return null;
  if (!data.destinations) return null;

  const { destinations } = data;

  const [planet, setPlanet] = React.useState("Moon");

  const planetObj = destinations.find((dest) => dest.name === planet);

  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    if (planetObj) {
      setImage(planetObj.images.png);
    }
  }, [planet]);

  return (
    <div className="h-full w-full flex flex-col items-center font-barlow">
      <h1 className="text-white tracking-wide p-6">
        <span className="font-bold opacity-25 pr-6">01</span>Escolha o seu
        destino
      </h1>

      <ImagePlanet image={image} />

      <div>
        <ul className="flex text-blue-secondary gap-x-8">
          <li className="cursor-pointer" onClick={() => setPlanet("Moon")}>
            Moon
          </li>
          <li className="cursor-pointer" onClick={() => setPlanet("Mars")}>
            Mars
          </li>
          <li className="cursor-pointer" onClick={() => setPlanet("Europa")}>
            Europa
          </li>
          <li className="cursor-pointer" onClick={() => setPlanet("Titan")}>
            Titan
          </li>
        </ul>
      </div>

      <TextPlanet textPlanet={planetObj ? planetObj : undefined} />
    </div>
  );
};

export default Destination;
