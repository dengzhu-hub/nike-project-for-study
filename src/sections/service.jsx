import { services } from "../constants";
import ServiceCard from "../component/serviceCard";

const Service = () => {
  return (
    <section className="flex max-container   justify-between flex-wrap gap-6 ">
      {services.map(service => (
        <ServiceCard
          key={service.label}
         service={service}
        />
      ))}
    </section>
  );
};

export default Service;
