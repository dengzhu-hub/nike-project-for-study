import Button from "../component/button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoesCard from "../component/shoesCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoesImg, setBigShoesImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full  flex  xl:flex-row justify-center gap-10 flex-col min-h-screen max-container"
    >
      <div className="relative capitalize xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-lg font-montserrat font-semibold text-coral-red leading-3">
          our summary collection
        </p>
        <h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[82]  mt-20 font-bold font-palanquin">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10 relative">
            the new arrival
          </span>
          <br />
          <span className="inline-block  text-coral-red mr-4 mt-4">nike </span>
          shoes
        </h1>
        <p className="text-lg leading-8 text-slate-gray mt-6 mb-14 sm:max-w-sm">
          discover stylish nike arrivals, quantity comfort , active life.
        </p>
        <Button label="shop now" imageUrl={arrowRight} />
        <div className="flex flex-wrap  items-start justify-start w-full mt-20 gap-16">
          {statistics.map((sta, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold mb-4">
                {sta.value}
              </p>
              <p className="text-lg text-slate-gray leading-7">{sta.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex  items-center justify-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          className="object-contain relative z-10"
          src={bigShoesImg}
          alt="bigShoe1"
        />
        <div className="flex sm:gap-6  gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoesCard
                imageUrl={shoe}
                changeBigShoes={shoe => setBigShoesImg(shoe)}
                bigShoesImg={bigShoesImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
