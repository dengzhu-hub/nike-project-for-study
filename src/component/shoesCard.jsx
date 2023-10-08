const ShoesCard = ({ imageUrl, changeBigShoes, bigShoesImg }) => {
  const handleClick = () => {
    if (bigShoesImg !== imageUrl.bigShoe) {
      changeBigShoes(imageUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoesImg === imageUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 max-sm:p-4 rounded-xl"><img className="object-contain " width={127} height={103} src={imageUrl.thumbnail} alt="" /></div>
    </div>
  );
};
export default ShoesCard;
