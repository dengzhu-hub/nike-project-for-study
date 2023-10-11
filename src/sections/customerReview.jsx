import {ReviewCard} from "../component";
import { reviews } from "../constants";
const CustomerReview = () => {
  return (
    <section className=" max-container  ">
      <h3 className="font-bold text-4xl leading-normal font-palanquin capitalize text-center">
        what our
        <span className="text-coral-red"> customers </span>
        say?
      </h3>
      <p
        className=" info-text max-w-lg m-auto 
        mt-4"
      >
        At our Nike shop, our customers are our top priority. You are our
        inspiration and driving force. We are committed to providing excellent
        products and services to meet your needs. Every pair of shoes and every
        piece of clothing represents limitless possibilities because we believe
        you're not just a shopper; you're an advocate for a lifestyle.
      </p>
      <div className="flex  justify-evenly items-center gap-14 max-lg:flex-col mt-24">
        {reviews.map(review => (
          <ReviewCard key={review.customerName} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
