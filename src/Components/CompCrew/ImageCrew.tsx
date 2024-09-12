import React from "react";

const ImageCrew = ({ image }: { image?: string }) => {
  return (
    <div className="pt-8 w-4/5	">
      <img src={image} />
    </div>
  );
};

export default ImageCrew;
