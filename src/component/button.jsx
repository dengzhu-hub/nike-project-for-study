const Button = ({ label, imageUrl }) => {
  return (
    <button className="bg-coral-red  outline-none btn text-white rounded-full border-coral-red">
      {label}
      {imageUrl && (
        <img className="ml-2 rounded-full" src={imageUrl} alt="arrow right" />
      )}
    </button>
  );
};

export default Button;
