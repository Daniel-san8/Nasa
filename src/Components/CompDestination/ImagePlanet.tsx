import React, { ComponentProps } from "react";

const ImagePlanet = ({ image }: { image: string }) => {
  return (
    <div className="px-6">
      <div className="py-12">
        <img src={image} width="150px" height="150px" />
      </div>
    </div>
  );
};

export default ImagePlanet;
