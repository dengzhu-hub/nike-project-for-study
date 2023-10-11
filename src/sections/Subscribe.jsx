import React from "react";
import { Button } from "../component";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex flex-1 justify-between  max-lg:flex-col gap-10 items-center max-container "
    >
      <h3 className="text-4xl capitalize font-bold  leading-[68px] lg:max-w-md font-palanquin">
        sign up from <span className="text-coral-red">updates </span>&
        newsletter
      </h3>
      <div className="lg:max-w-[40%] rounded-full justify-between w-full items-center flex max-sm:flex-col gap-5 p-2.5 sm:border  sm:border-slate-gray ">
        <input type="text" placeholder="jonas@gmail.com" className="inputs" />
        <div className="flex  max-sm:justify-end max-sm:w-full items-center">
          <Button label="sign up" widthFull />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
