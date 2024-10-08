import React from "react";
import { globalUse } from "../Context/GlobalContext";

const Technology = () => {
  const { data } = globalUse();

  const [indice, setIndice] = React.useState(0);

  const elementoUl = React.useRef<HTMLUListElement>(null);

  const estadoActive =
    "bg-white w-10 h-10 flex justify-center items-center rounded-3xl cursor-pointer lg:w-20 lg:h-20 lg:rounded-full lg:text-lg";
  const estadoOff =
    "flex justify-center items-center w-10 h-10 border border-white border-opacity-25 rounded-3xl text-white cursor-pointer lg:w-20 lg:h-20 lg:rounded-full lg:text-lg";

  const [largura, setLargura] = React.useState(0);

  const [image, setImage] = React.useState<"landscape" | "portrait">(
    "portrait"
  );

  function atualizaImage() {
    setLargura(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", atualizaImage);

    if (largura >= 768 && largura <= 1024) {
      setImage("landscape");
    } else setImage("portrait");

    return () => {
      window.removeEventListener("resize", atualizaImage);
    };
  }, [largura]);

  function atualizaComponentes(event: React.MouseEvent) {
    const liList = elementoUl.current?.childNodes as NodeListOf<HTMLLIElement>;
    const elementoLi = event.target as HTMLLIElement;
    const indiceElementoLi = Number(elementoLi.innerHTML) - 1;

    liList.forEach((li) => (li.className = estadoOff));

    liList[indiceElementoLi].className = estadoActive;

    setIndice(indiceElementoLi);
  }

  if (!data) return null;
  return (
    <div className="flex flex-col items-center lg:h-screen">
      <h1 className="text-white tracking-wide pt-6 pb-20 md:self-start md:px-10 md:pt-10 lg:pl-32">
        <span className="font-bold opacity-25 pr-6 lg:text-nowrap">03</span>
        Lançamento espacial 101
      </h1>

      <div className="flex flex-col items-center lg:flex-row-reverse lg:items-center lg:pl-32 lg:pb-16">
        <div className="w-full">
          <img
            className="h-72 w-full lg:h-96"
            src={`${data?.technology[indice].images[image]}`}
          />
        </div>

        <ul
          className="flex gap-x-4 pt-8 pb-10 lg:flex-col lg:gap-y-4 lg:order-1 lg:pr-16"
          ref={elementoUl}
        >
          <li className={estadoActive} onClick={atualizaComponentes}>
            1
          </li>
          <li className={estadoOff} onClick={atualizaComponentes}>
            2
          </li>
          <li className={estadoOff} onClick={atualizaComponentes}>
            3
          </li>
        </ul>

        <div className="flex flex-col items-center lg:items-start lg:w-11/12">
          <h2 className="text-2xl text-blue-secondary  ">A terminologia</h2>
          <h3 className="text-4xl text-white ">
            {data.technology[indice]?.name}
          </h3>
          <p className="text-center text-blue-secondary leading-6 pt-4 px-6 pb-12 md:px-32 lg:p-0 lg:text-start lg:pt-6 lg:pr-8">
            {data.technology[indice]?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
