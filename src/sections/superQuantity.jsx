import Button from "../component/button";
import { shoe8 } from "../assets/images";
const SuperQuantity = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between  max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1 lg:max-w-lg font-bold capitalize ">
        <h2 className="font-palanquin text-4xl">
          we provide you
          <span className="  text-coral-red ">super </span>
          <span className="  text-coral-red ">quantity </span>
          shoes{" "}
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          discover stylish nike arrivals, quantity comfort innovation for your
          active life.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Explore the latest fashionable arrivals from Nike, delivering both
          style and unmatched comfort to elevate your active lifestyle.
        </p>
        <div className="mt-12">
          <Button label={"view details"} />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <img className="object-contain bg-black" src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    
    </section>
  );
};

export default SuperQuantity;
