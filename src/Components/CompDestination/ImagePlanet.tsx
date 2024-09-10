import React from "react";

const ImagePlanet = ({ image }: { image: string }) => {
  return (
    <div className="px-6">
      <div className="py-12">
        <img src={image} className="w-36 md:w-72 lg:w-96" />
      </div>
    </div>
  );
};

export default ImagePlanet;
