const Button = ({ label, imageUrl }) => {
  return (
    <button className="bg-coral-red  btn text-white rounded-full border-coral-red">
      {label}
      <img className="ml-2 rounded-full" src={imageUrl} alt="arrow right" />
    </button>
  );
};

export default Button;
