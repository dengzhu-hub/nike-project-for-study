const Button = ({
  label,
  imageUrl,
  backgroundColor,
  borderColor,
  textColor,
  widthFull,
}) => {
  return (
    <button
      className={`${
        borderColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red hover:bg-coral-orange  "
      }   outline-none       group inline-flex items-center justify-center h-12 rounded-full text-sm 
      font-semibold whitespace-nowrap px-6 focus:outline-none  transition ease-in-out duration-150
      focus:ring-2  
      focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 ${
        widthFull && "w-full"
      }
      `}
    >
      {label}
      {imageUrl && (
        <img className="ml-2 rounded-full" src={imageUrl} alt="arrow right" />
      )}
    </button>
  );
};

export default Button;
