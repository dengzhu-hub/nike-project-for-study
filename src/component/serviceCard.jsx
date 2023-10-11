const ServiceCard = ({ service }) => {
  const { imgURL, label, subtext } = service;
  return (
    <div className="flex flex-col sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-6">
      <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-bold leading-none capitalize font-palanquin text-3xl mt-4">{label}</h3>
      <p className="mt-3 font-normal break-words text-lg leading-normal">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
