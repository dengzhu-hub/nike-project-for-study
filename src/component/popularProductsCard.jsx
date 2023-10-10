import { star } from "../assets/icons";
import { decodeEntity, encode } from "html-entities";
const PopularProductsCard = ({ product }) => {
  const he = decodeEntity("&copy;", { level: "html5" });
  console.log(he);
  const { imgURL, name, price } = product;
  return (
    <div className="flex flex-col flex-1  w-full max-sm:w-full">
      <img src={imgURL} alt={name} width={128} height={128} />
      img
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <img src={star} width={24} height={24} alt="rating" />
        <p className=" text-xl text-gray-500 leading-none font-Roboto">{`${he}9.9`}</p>
      </div>
        <h3 className="text-2xl leading-normal font-montserrat mt-2">{name}</h3>
        <p className="text-lg font-mono  leading-normal text-coral-red mt-2">{price}</p>
    </div>
  );
};
export default PopularProductsCard;
