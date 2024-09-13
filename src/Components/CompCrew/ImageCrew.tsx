const ImageCrew = ({ image }: { image?: string }) => {
  return (
    <div className="pt-8 w-72 flex justify-center md:w-2/3 lg:w-4/5">
      <img src={image} />
    </div>
  );
};

export default ImageCrew;
