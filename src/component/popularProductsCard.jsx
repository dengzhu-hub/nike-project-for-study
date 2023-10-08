import React from "react";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1  w-full max-sm:w-full">
      <img src={imgURL} alt={name} />
      img
    </div>
  );
};
export default PopularProductsCard;
