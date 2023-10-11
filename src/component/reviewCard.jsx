import { star } from "../assets/icons";

const ReviewCard = ({ review }) => {
  const { imgURL, customerName, rating, feedback } = review;
  return (
    <div className="flex flex-1 items-center flex-col justify-center">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full w-[120px] h-[120px] object-contain"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex gap-2.5 mt-6 items-centerjc
       ">
        <img src={star} alt="" className="object-contain m-0" />
        <p className="text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="font-bold text-center text-3xl mt-2 leading-0 text-gray-400">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
