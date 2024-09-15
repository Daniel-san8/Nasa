import React from "react";
import { globalUse } from "../Context/GlobalContext";
import ImagePlanet from "./CompDestination/ImagePlanet";
import TextPlanet from "./CompDestination/TextPlanet";

const Destination = () => {
  const { data } = globalUse();
  const [planet, setPlanet] = React.useState("Moon");

  const [image, setImage] = React.useState("");
  React.useEffect(() => {
    if (planetObj) {
      setImage(planetObj.images.png);
    }
  }, [planet]);

  if (!data) return null;

  const planetObj = data.destinations?.find((dest) => dest.name === planet);

  return (
    <div className="lg:h-screen w-full flex flex-col items-center font-barlow lg:flex-row lg:justify-between lg:pb-32">
      <div className="flex flex-col items-center lg:pl-32">
        <h1 className="text-white tracking-wide lg:self-start lg:pb-12">
          <span className="font-bold opacity-25 pr-6 lg:text-nowrap ">01</span>
          Escolha o seu destino
        </h1>

        <ImagePlanet image={image} />
      </div>

      <div className="flex flex-col items-center lg:h-screen lg:items-start">
        <div className="md:pt-11 lg:pl-20 lg:pt-52 ">
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

        <TextPlanet textPlanet={planetObj ? planetObj : null} />
      </div>
    </div>
  );
};

export default Destination;
