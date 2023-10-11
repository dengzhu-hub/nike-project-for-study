import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../component/button";

const SpecialOffer = () => {
  return (
    <section className="flex gap-10 max-container flex-wrap items-center max-lg:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          className="object-contain w-full "
          width={773}
          height={687}
        />
      </div>
      <div className="flex flex-col flex-1 lg:max-w-lg  capitalize ">
        <h2 className="font-palanquin text-4xl font-bold">
          <span className="  text-coral-red ">special </span>
          offer{" "}
        </h2>
        <p className="info-text leading-7 mt-4 lg:max-w-lg">
          &quot;Discover Stylish Nike Arrivals, Quantity Comfort Innovation For
          Your Active Life. Explore The Latest Fashionable Arrivals From Nike,
          Delivering Both Style And Unmatched Comfort To Elevate Your Active
          Lifestyle.&quot;
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          &quot;Stylish Designs: Discover the trendiest Nike styles that combine
          fashion and function. Unmatched Comfort: Experience the ultimate in
          comfort and innovation for your active lifestyle.&quot;
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button label={"shop now"} imageUrl={arrowRight} />
          <Button
            label={"learn more"}
           
            backgroundColor="bg-slate-700"
            borderColor={"bg-slate-700"}
            textColor={'text-white '}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
